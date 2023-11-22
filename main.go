package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/requestid"
	"github.com/google/uuid"
)

type User struct {
	Id        string
	FirstName string
	LastName  string
}

func handlerUser(c *fiber.Ctx) error {
	user := User{FirstName: "Iber", LastName: "Chambi"}
	return c.Status(fiber.StatusOK).JSON(user)
}
func handlerPostUser(c *fiber.Ctx) error {
	user := User{}
	if err := c.BodyParser(&user); err != nil {
		return err
	}
	user.Id = uuid.NewString()
	return c.Status(fiber.StatusOK).JSON(user)

}

func main() {
	fmt.Println("Iniciado")
	app := fiber.New()

	// midelwares
	app.Use(logger.New()) // fiber gemerea un log de peticiones a las rutas

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, world")
	})
	app.Get("/about", func(c *fiber.Ctx) error {
		return c.SendString("about")
	})

	app.Use(requestid.New()) // generea un uuid en las cabeceras de las rutas
	userGroup := app.Group("/user")
	userGroup.Get("", handlerUser)
	userGroup.Post("", handlerPostUser)

	app.Listen(":3001")
}
