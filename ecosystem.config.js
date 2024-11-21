const dotenv = require("dotenv")
dotenv.config({ path: "./.env.deploy"})

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPOSITORY, DEPLOY_REF } = process.env

module.exports = {
    deploy: {
        production: {
            user: DEPLOY_USER,
            host: DEPLOY_HOST,
            ref: DEPLOY_REF,
            repo: 'https://github.com/Username/repository.git',
            path: DEPLOY_PATH,
            'post-deploy': 'cd frontend && pwd && npm ci && npm run build',
        },
    },
};