package router

import (
	h "github.com/Yber-0010/fiber-golang-docker/infrastructure/handler"
	"github.com/gofiber/fiber/v2"
)

func ServiceRouter(app fiber.Router) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, world")
	})

	egx := app.Group("api/v1/")
	egx.Get("user", h.User)
	egx.Post("user", h.SendUser)
}
