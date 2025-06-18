/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/common"],
  experimental: {
    extensionAlias: {
      ".js": [".js", ".ts", ".tsx"]
    }
  }
};

export default nextConfig;
