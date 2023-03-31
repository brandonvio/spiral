# Makefile for Go project

# Set binary name
BINARY_NAME=spiral

# Set Go environment variables
export GO111MODULE=on
export GOPROXY=https://proxy.golang.org

# Default target
all: config build test

# Configure the project
config:
	@echo "Configuring the project..."
	go env

# Build the project
build:
	@echo "Building the project..."
	go build -o $(BINARY_NAME)

# Run tests
test:
	@echo "Running tests..."
	go test -v ./...

# Clean the project
clean:
	@echo "Cleaning up..."
	go clean
	rm -f $(BINARY_NAME)

.PHONY: all config build test clean
