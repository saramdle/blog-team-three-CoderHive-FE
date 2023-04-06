/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com"],
  },
};

const removeImports = require("next-remove-imports")();
module.exports = removeImports({ ...nextConfig });
