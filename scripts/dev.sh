#!/bin/bash

export DATABASE_URL="postgresql://postgres:password@localhost:5432"

# Install node_modules if missing
[ ! -d "node_modules" ] && npm ci

docker compose up -d \
&& sleep 5 \
&& npm run sync:db \
&& npx concurrently --kill-others npm:dev:*
