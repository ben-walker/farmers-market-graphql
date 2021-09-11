#!/bin/sh

# Setup the environment
export DATABASE_URL="postgresql://postgres:password@localhost:5432"

# Install node_modules if missing
[ ! -d "node_modules" ] && npm install

docker compose up --detach

while ! pg_isready --host=localhost --port=5432 --username=postgres; do
  sleep 1
done

npx prisma migrate reset --skip-generate --skip-seed --force
npx prisma migrate dev --skip-seed
