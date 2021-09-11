#!/bin/sh

. ./scripts/setup-env.sh

npx prisma migrate reset --skip-generate --skip-seed --force
npx prisma migrate dev --skip-seed
