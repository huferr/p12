const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/project-twelve",
  assetPrefix: "/project-twelve",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],

    prependData: `@import "~@/styles/global.scss";`,
  },
};

module.exports = nextConfig;
