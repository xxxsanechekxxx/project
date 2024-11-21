const dotenv = require("dotenv");
dotenv.config({ path: "./.env.deploy"});
const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPOSITORY = 'origin/master',
} = process.env;

const fs = require('fs');
const path = require('path');

// Получаем имя первого `.js` файла в папке `dist`
const distPath = path.join(__dirname, 'dist');
const scriptFile = fs.readdirSync(distPath).find(file => file.endsWith('.js'));

if (!scriptFile) {
  throw new Error('No JavaScript file found in the "dist" directory.');
}

module.exports = {
  apps: [
    {
      name: "victoriasecret",
      script: path.join('dist', scriptFile), // Путь к найденному файлу
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      'pre-deploy-local': `bash scripts/deployEnv.sh  ${DEPLOY_USER}@${DEPLOY_HOST} ${DEPLOY_PATH}`,
      'post-deploy': 'cd frontend && pwd && npm ci && npm run build:prod && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};