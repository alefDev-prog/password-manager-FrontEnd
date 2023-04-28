/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

}


module.exports = () => {
  const nextConfig = {
    experimental: {
      appDir: true,
    },
  
  }


  const rewrites = () => {
    return [
      {
        source: "/api/login",
        destination: "https://password-manager-backend-4mqx.onrender.com/login",
      },
      {
        source: "/api/data",
        destination: "https://password-manager-backend-4mqx.onrender.com/data",
      },
    ];
  };
  return {
    rewrites,
  };
};


