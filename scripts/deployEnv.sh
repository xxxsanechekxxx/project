#!/bin/bahs
SSH_CONFIG="${1}"
PROJECT_PATH="${2}"
scp -Cr .env "$SSH_CONFIG:${PROJECT_PATH}/current/frontend"