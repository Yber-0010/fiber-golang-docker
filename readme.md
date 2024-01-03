### Fiber API REST ###
#### comandos usados ####
- Inicio del proyecto

    ```go mod init "git/nombre del proyecto repositorio"```
- Importando paquetes

    ```go mod tidy```
- Iniciar proyecto

    ```go run .\main.go```
- O tambien porque este proyecto se instalo para desarrollo:
go install github.com/cosmtrek/air@latest && air init

    ``` air ```
- ya estaria funcionando el proyecto.

- docker run
- evironment PORT dinamico
```docker build -t fiber . && docker run -dp 3001:3002 --name=fiber -e PORT=3002 fiber```