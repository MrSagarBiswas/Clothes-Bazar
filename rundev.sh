#!/bin/bash
systemctl start mongod
cd ./client && npm run dev | 
sed -e 's/^/[client] /' & 
cd ./api  |
sed -e 's/^/[api] /' &&
kill $!