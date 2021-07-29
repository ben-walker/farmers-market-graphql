#!/bin/bash

export DATABASE_URL="postgresql://postgres:password@localhost:5432"

# Start services
docker compose up -d
