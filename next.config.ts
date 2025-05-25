const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: [
      "images.unsplash.com",
      "tecknotrove.com",
      "phicsit.in",
      "infolabz.in",
    ],
  },
};

export default nextConfig;
