/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static export for GitHub Pages
  basePath: "/hawaii-barbershop",
  assetPrefix: "/hawaii-barbershop/",
};

module.exports = nextConfig;
