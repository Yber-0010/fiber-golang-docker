package router

import (
	h "github.com/Yber-0010/fiber-golang-docker/user/handler"
	"github.com/gofiber/fiber/v2"
)

func ApiRouter(app fiber.Router) {

	egx := app.Group("api/v1/")
	egx.Get("user", h.User)
	egx.Post("user", h.SendUser)

}
