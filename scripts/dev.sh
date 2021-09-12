#!/bin/sh

. ./scripts/setup-env.sh

npx prisma migrate deploy
npx prisma generate
npx prisma db seed
npx concurrently --kill-others npm:*:dev
