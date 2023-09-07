const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    supabase: {
      client: {
        auth: {
          persistSession: false // or true
        },
        
      }
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff2|woff|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  }
};

module.exports = nextConfig;
