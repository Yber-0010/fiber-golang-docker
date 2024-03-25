package database

import (
	"database/sql"
	"fmt"
	"log"
	"sync"

	"github.com/Yber-0010/fiber-golang-docker/env"
	_ "github.com/lib/pq"
)

var (
	// db is a pointer to gorm.DB
	db   *sql.DB
	once sync.Once

	user     string
	password string
	host     string
	name     string
	port     int
)

// Connect creates a connection to database
func NewPostgresDB() {

	once.Do(func() {
		connect(connection())
	})
}

func connection() string {

	e := env.Env()
	env.MuDB.Lock()
	host = e.GetDBHost()
	port = e.GetDBPort()
	name = e.GetDBName()
	user = e.GetDBUser()
	password = e.GetDBPass()
	env.MuDB.Unlock()
	log.Printf("Host: %s, Port %d, Name: %s, User: %s Pass: %s", host, port, name, user, password)
	return fmt.Sprintf("user=%s password=%s host=%s dbname=%s port=%d sslmode=disable", user, password, host, name, port)
}

func PostgresDB() *sql.DB {
	return db
}

func Close() {
	db.Close()
}

func connect(constr string) {
	var err error
	if db, err = sql.Open("postgres", constr); err != nil {
		log.Printf("Error connecting to database %s", err)
	}

	if err := db.Ping(); err != nil {
		log.Panicf("Error pinging database %s", err)
	} else {
		fmt.Println("Connected to postgres")
	}
}
