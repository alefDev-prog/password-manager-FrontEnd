/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env: {
    BACKEND_URL: process.env.BACKEND_URL
  },

 

  async rewrites() {
    return [
      { 
        source: "/api/login",
        destination: `${process.env.BACKEND_URL}/login`
      
      },
      {
        source: "/api/data",
        destination: `${process.env.BACKEND_URL}/data`
      
      },
      {
        source: "/api/add",
        destination:`${process.env.BACKEND_URL}/add`
      
      },
      {
        source: "/api/logout",
        destination: `${process.env.BACKEND_URL}/logout`


      },
      {
        source: "/api/delete",
        destination: `${process.env.BACKEND_URL}/delete`


      },
      {
        source: "/api/getpass",
        destination: `${process.env.BACKEND_URL}/getpass`
        
        
      },
      {
        source: "/api/register",
        destination: `${process.env.BACKEND_URL}/register`
        
        
      },
    ];
  }
}

module.exports = nextConfig
