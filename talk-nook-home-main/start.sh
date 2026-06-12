#!/bin/bash
cd /app/talk-nook-home-main
npm install
npm run build
node dist/server/index.mjs