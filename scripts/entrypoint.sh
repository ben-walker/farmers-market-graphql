#!/bin/sh

while ! nc -z postgres 5432; do
  echo "postgres:5432 - no response"
  sleep 1
done

echo "postgres:5432 - accepting connections"

npx prisma migrate dev --skip-generate --skip-seed
npx prisma db seed --preview-feature
npm start
