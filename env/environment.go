package env

import "sync"

var (
	e    *environment = &environment{}
	once sync.Once
	wg   sync.WaitGroup
)

type environment struct {
	environmentApp
}

func Init() {
	once.Do(func() {
		e.init()
	})
}

func (e *environment) init() {
	wg.Add(1)
	go e.initApp(&wg)
	wg.Wait()
}

func Env() *environment {
	return e
}
