/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Add this
  images: {
    unoptimized: true,
  },
  // Optional: Skip specific routes during export
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig