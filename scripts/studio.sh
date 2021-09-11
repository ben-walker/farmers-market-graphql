#!/bin/sh

. ./scripts/setup-env.sh

npx prisma migrate dev
npx prisma db seed
npx prisma studio
