package token

import (
	"fmt"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestPasetoMaker(t *testing.T) {
	maker, err := NewPasetoMaker("wsdwsdwsdwdsawdwsdwsdwsdwsdwsder")
	require.NoError(t, err)
	username := "test_user"
	duration := time.Minute
	issuedAt := time.Now()
	expiredAt := issuedAt.Add(duration)
	token, err := maker.CreateToken(username, duration)
	fmt.Println("token: ", token)
	require.NoError(t, err)
	require.NotEmpty(t, token)
	payload, err := maker.VerifyToken(token)
	fmt.Println("payload: ", payload)
	require.NoError(t, err)
	require.NotEmpty(t, payload)
	require.NotZero(t, payload.ID)
	require.Equal(t, username, payload.UserNAme)
	require.WithinDuration(t, issuedAt, payload.IssuedAt, time.Second)
	require.WithinDuration(t, expiredAt, payload.ExpiredAt, time.Second)

}

func TestExpiredPasetoToken(t *testing.T) {
	fmt.Println(" time.Minute: ", time.Minute)
	fmt.Println(" (-)time.Minute: ", -time.Minute)
	maker, err := NewPasetoMaker("wsdwsdwsdwdsawdwsdwsdwsdwsdwsder")
	require.NoError(t, err)
	token, err := maker.CreateToken("test_user", -time.Minute)
	fmt.Println("token: ", token)
	require.NoError(t, err)
	require.NotEmpty(t, token)
	payload, err := maker.VerifyToken(token)
	fmt.Println("payload: ", payload)
	require.Error(t, err)
	require.EqualError(t, err, ErrExpiredToken.Error())
	require.Nil(t, payload)
}

func TestCreateTokenAndVerify(t *testing.T) {
	fmt.Println("test token")
	maker, err := NewPasetoMaker("wsdwsdwsdwdsawdwsdwsdwsdwsdwsder")
	require.NoError(t, err)
	username := "test_user"
	duration := time.Hour
	issuedAt := time.Now()
	expiredAt := issuedAt.Add(duration)
	fmt.Println("expiredAt: ", expiredAt)
	token, err := maker.CreateToken(username, duration)
	fmt.Println("token: ", token)
	require.NoError(t, err)
	require.NotEmpty(t, token)
	payload, err := maker.VerifyToken(token)
	fmt.Println("payload: ", payload)
	require.NoError(t, err)

}
