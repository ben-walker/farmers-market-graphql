#!/bin/bash

export DATABASE_URL="postgresql://postgres:password@localhost:5432"

# Install node_modules if missing
[ ! -d "node_modules" ] && npm ci

npx concurrently --kill-others "docker compose up" "npm:dev:*"
