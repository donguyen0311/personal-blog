module.exports = {
  apps: [
    {
      name: "Personal Blog",
      script: "npm",
      args: "run serve",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      max_memory_restart: "500M",
    },
  ],
}
