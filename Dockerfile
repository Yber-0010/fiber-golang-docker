FROM golang:1.21.4 AS build-back
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN CGO_ENABLED=0 go build -ldflags "-s -w" -o fiber -v main.go

FROM scratch
WORKDIR /
COPY --from=build-back /app/fiber ./
CMD ["/fiber"]
EXPOSE 3001