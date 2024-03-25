package handler

import (
	m "github.com/Yber-0010/fiber-golang-docker/user/domain"
	"github.com/google/uuid"

	"github.com/gofiber/fiber/v2"
)

func User(c *fiber.Ctx) error {
	user := m.NewUser("iber", "chambi")
	return c.Status(fiber.StatusOK).JSON(user)
}

func SendUser(c *fiber.Ctx) error {
	user := m.User{}
	if err := c.BodyParser(&user); err != nil {
		return err
	}
	user.Id = uuid.NewString()
	return c.Status(fiber.StatusOK).JSON(user)
}
