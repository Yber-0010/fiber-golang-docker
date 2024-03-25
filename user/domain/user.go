package domain

import "github.com/google/uuid"

type User struct {
	Id        string `json:"userId,omitempty"`
	FirstName string `json:"firstName,omitempty"`
	LastName  string `json:"lastName,omitempty"`
}

func NewUser(firstName, lastname string) User {
	return User{
		uuid.New().String(),
		firstName,
		lastname,
	}
}
