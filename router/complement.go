package router

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/favicon"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/fiber/v2/middleware/requestid"
)

func ComplementRouter(app fiber.Router) {
	app.Use(recover.New())   // recupera la app de un panic
	app.Use(favicon.New())   // favicon de la app
	app.Use(logger.New())    // fiber gemerea un log de peticiones a las rutas
	app.Use(requestid.New()) // generea un uuid en las cabeceras de las rutas
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET, POST, PUT, DELETE, PATCH",
		AllowHeaders: "Cache-Control, Accept, Content-Type, Content-Length, Accept-Encoding, Authorization",
	}))
	app.Get("/metrics", monitor.New(monitor.Config{
		Title:   "SVC API Metrics",
		Refresh: 2 * time.Second,
	}))
	app.Get("/*", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).SendString(`<h1>404 No Encontrado</h1>`)
	})
}
