#!/bin/bash

# Setup the environment
export DATABASE_URL="postgresql://postgres:password@localhost:5432"
export REDIS_URL="redis://:@localhost:6379"
export SECRET="oo6iP6dQRC/qm2WlUn3Tej+LocObV801"
export CORS_ORIGIN="https://studio.apollographql.com"

# Install node_modules if missing
[ ! -d "node_modules" ] && npm ci

docker compose up -d \
  && sleep 5 \
  && npm run sync:db \
  && npx concurrently --kill-others npm:dev:*
