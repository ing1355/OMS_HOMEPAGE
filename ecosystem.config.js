module.exports = {
  apps: [
    {
      name: "homepage",
      script: "./server.js",
      watch: true,
      // interpreter: "/usr/bin/node",
      interpreter: "/usr/local/Cellar/node/16.9.1/bin/node",
      instances: 1,
      exec_mode: "cluster",
      wait_ready: true,
      kill_timeout: 5000,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
