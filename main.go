package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	e "github.com/Yber-0010/fiber-golang-docker/env"
	sr "github.com/Yber-0010/fiber-golang-docker/router"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/requestid"
)

var en = e.Env()

func init() {

	fmt.Println("Proyecto test con fiber")
	e.Init()

}

func main() {

	app := fiber.New()
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, world")
	})

	app.Use(logger.New())    // fiber gemerea un log de peticiones a las rutas
	app.Use(requestid.New()) // generea un uuid en las cabeceras de las rutas

	sr.ServiceRouter(app)

	app.Get("/*", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).SendString(`<h1>404 No Encontrado</h1>`)
	})

	secure := en.GetSecure()
	port := ":" + en.GetPort()

	if secure {
		go func() {
			log.Printf(`Running with TLS in https://localhost%v`, port)
			if err := app.ListenTLS(
				port,
				"./certs/127.0.0.1.pem",
				"./certs/127.0.0.1-key.pem",
			); err != nil {
				log.Panic(err)
			}
		}()
	} else {
		go func() {
			log.Printf(`Running in http://localhost%v`, port)
			if err := app.Listen(port); err != nil {
				log.Panic(err)
			}
		}()
	}

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)

	<-c
	_ = app.Shutdown()

}
