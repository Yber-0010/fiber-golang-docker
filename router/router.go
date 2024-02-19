package router

import (
	"github.com/gofiber/fiber/v2"
)

func Router(app fiber.Router) {

	app.Get("/*", func(ctx *fiber.Ctx) error {
		return ctx.SendFile("./public/index.html")
	})

	app.Use(func(c *fiber.Ctx) error {
		return c.SendStatus(404)
	})

}
