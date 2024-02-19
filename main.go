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
)

var en = e.Env()

func init() {

	fmt.Println("Proyecto init con fiber")
	e.Init()

}

func main() {

	app := fiber.New(fiber.Config{
		DisableStartupMessage: false,
	})

	sr.ComplementRouter(app)
	sr.ApiRouter(app)
	sr.Router(app)

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
