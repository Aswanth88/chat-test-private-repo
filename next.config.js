const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    supabase: {
      client: {
        auth: {
          persistSession: false // or true
        },
        SUPABASE_URL: process.env.SUPABASE_URL, // Include SUPABASE_URL
        SUPABASE_KEY: process.env.SUPABASE_KEY, // Include SUPABASE_KEY
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
