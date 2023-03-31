# Makefile for Python project

# Set Python environment variables
VENV_NAME=venv
PYTHON=$(VENV_NAME)/bin/python

# Default target
all: config build test

# Create virtual environment
$(VENV_NAME): requirements.txt
	@echo "Creating virtual environment..."
	python3 -m venv $(VENV_NAME)
	$(PYTHON) -m pip install --upgrade pip
	$(PYTHON) -m pip install -r requirements.txt

# Configure the project
config: $(VENV_NAME)
	@echo "Configuring the project..."
	$(PYTHON) -c "import sys; print(sys.executable)"

# Install dependencies
build: $(VENV_NAME)
	@echo "Installing dependencies..."

# Run tests
test: $(VENV_NAME)
	@echo "Running tests..."
	$(VENV_NAME)/bin/pytest

# Clean the project
clean:
	@echo "Cleaning up..."
	rm -rf $(VENV_NAME)

.PHONY: all config build test clean
