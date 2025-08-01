const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
};

export default nextConfig;
