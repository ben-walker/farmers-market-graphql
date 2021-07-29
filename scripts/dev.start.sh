#!/bin/bash

export DATABASE_URL="postgresql://postgres:password@localhost:5432"

# Install node_modules if missing
[ ! -d "node_modules" ] && npm ci

npm run generate \
&& docker compose up --detach \
&& npx concurrently --kill-others npm:watch:*
