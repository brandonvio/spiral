# Makefile for Node.js project

# Set Node environment variables
export NODE_ENV=development

# Default target
all: config test

# Configure the project
config:
	@echo "Configuring the project..."
	npm config list

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Run tests
test: install
	@echo "Running tests..."
	npm test

# Clean the project
clean:
	@echo "Cleaning up..."
	rm -rf node_modules

.PHONY: all config install build test clean
