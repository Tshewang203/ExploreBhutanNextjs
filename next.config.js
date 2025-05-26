/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'res.cloudinary.com',
      'source.unsplash.com',
      'www.google.com',
      'lh3.googleusercontent.com',
      'encrypted-tbn0.gstatic.com',
      'encrypted-tbn1.gstatic.com',
      'encrypted-tbn2.gstatic.com',
      'encrypted-tbn3.gstatic.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig