package env

import "sync"

var (
	e    *environment = &environment{}
	once sync.Once
	wg   sync.WaitGroup
)

type environment struct {
	environmentApp
	environmentDB
}

func Init() {
	once.Do(func() {
		e.init()
	})
}

func (e *environment) init() {
	wg.Add(2)
	go e.initApp(&wg)
	go e.initDB(&wg)
	wg.Wait()
}

func Env() *environment {
	return e
}
