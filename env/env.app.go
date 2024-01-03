package env

import (
	"os"
	"sync"
)

var (
	MuApp = sync.Mutex{}
)

// environmentApp contains the environment variables for the application
type environmentApp struct {
	port   string
	portOK bool
	// url      string
	// urlOK    bool
	// svcurl   string
	// svcurlOK bool
	// secrue   string
	// secureOK bool
}

// InitApp initializes the environment variables for the application
//
// if the variables are not sert default values will be used
func (e *environment) initApp(wg *sync.WaitGroup) {
	MuApp.Lock()
	e.port, e.portOK = os.LookupEnv("PORT")
	// e.url, e.urlOK = os.LookupEnv("URL")
	// e.svcurl, e.svcurlOK = os.LookupEnv("SVC_URL")
	// e.secrue, e.secureOK = os.LookupEnv("SECURE")
	MuApp.Unlock()
	wg.Done()
}

// `PORT`: Puerto en el que se ejecutará el servidor.
//
// Por defecto es `3001`.
func (e *environment) GetPort() (val string) {
	if !e.portOK {
		val = "3001"
	} else {
		val = e.port
	}
	return
}
