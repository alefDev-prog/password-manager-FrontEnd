/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "https://password-manager-backend-4mqx.onrender.com/login",
      },
      {
        source: "/api/data",
        destination: "https://password-manager-backend-4mqx.onrender.com/data",
      },
      {
        source: "/api/add",
        destination: "https://password-manager-backend-4mqx.onrender.com/add",
      },
      {
        source: "/api/logout",
        destination: "https://password-manager-backend-4mqx.onrender.com/logout",
      },
      {
        source: "/api/delete",
        destination: "https://password-manager-backend-4mqx.onrender.com/delete",
      },
      {
        source: "/api/getpass",
        destination: "https://password-manager-backend-4mqx.onrender.com/getpass",
      },
    ];
  }
}

module.exports = nextConfig
