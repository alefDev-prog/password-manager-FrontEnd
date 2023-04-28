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
    ];
  }
}

module.exports = nextConfig
