#!/bin/bash

export DATABASE_URL="postgresql://postgres:password@localhost:5432"

npm run generate \
&& docker compose up --detach \
&& npm run watch:src
