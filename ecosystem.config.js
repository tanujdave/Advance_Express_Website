module.exports = {
  apps: [
    {
      name: 'meetup',
      script: 'bin/www',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    "production" : {
        "user" : "ubuntu",
        "host" : "54.227.125.123",
        "ref"  : "origin/master",
        "repo" : "https://github.com/tanujdave/Advance_Express_Website.git",
        "path" : "/home/ubuntu/deploy",
        "pre-setup" : "pwd",
        "pre-deploy-local" : "echo 'This is a local executed command'",
        "post-deploy" : "cp ../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production"
    },
  },
};
