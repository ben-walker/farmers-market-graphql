#!/bin/bash

export DATABASE_URL="postgresql://postgres:password@localhost:5432"
export REDIS_URL="redis://:@localhost:6379"

# Install node_modules if missing
[ ! -d "node_modules" ] && npm ci

docker compose up -d \
&& sleep 5 \
&& npm run sync:db \
&& npx concurrently --kill-others npm:dev:*
