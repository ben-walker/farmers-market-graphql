#!/bin/sh

. ./scripts/setup-env.sh

npx prisma migrate deploy
npx prisma db seed
npx prisma studio
