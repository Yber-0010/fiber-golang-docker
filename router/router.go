package router

import (
	"github.com/gofiber/fiber/v2"
)

func Router(app fiber.Router) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, world")
	})
	app.Get("/*", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).SendString(`<h1>404 No Encontrado</h1>`)
	})

}
