package tokenjwt

import (
	"log"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestJWTMaker(t *testing.T) {
	maker, err := NewJWTMaker("wsdwsdwsdwdsawdwsdwsdwsdwsdwsder")
	require.NoError(t, err)

	username := "test_user"
	duration := time.Minute
	token, err := maker.CreateToken(username, duration)
	log.Println("token: ", token)

	// issuedAt := time.Now()
	// expiredAt := issuedAt.Add(duration)

	// require.NoError(t, err)
	// require.NotEmpty(t, token)

	// payload, err := maker.VerifyToken(token)

	// log.Println("payload: ", payload)

	// require.NoError(t, err)
	// require.NotEmpty(t, payload)

	// require.NotZero(t, payload.ID)
	// require.Equal(t, username, payload.Subject)
	// require.WithinDuration(t, issuedAt, payload.IssuedAt.Time, time.Second)
	// require.WithinDuration(t, expiredAt, payload.ExpiresAt.Time, time.Second)

}

func TestExpiredJWTToken(t *testing.T) {
	maker, err := NewJWTMaker("wsdwsdwsdwdsawdwsdwsdwsdwsdwsder")
	require.NoError(t, err)

	token, err := maker.CreateToken("test_user", -time.Minute)
	require.NoError(t, err)
	require.NotEmpty(t, token)

	log.Println("token: ", token)
}
