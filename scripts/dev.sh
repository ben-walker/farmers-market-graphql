#!/bin/sh

. ./scripts/setup-env.sh

npm run prisma:db:sync
npx concurrently --kill-others npm:*:dev
