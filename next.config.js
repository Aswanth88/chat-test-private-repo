const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    supabase: {
      client: {
        auth: {
          persistSession: false, // or true
        },
        SUPABASE_URL: process.env.SUPABASE_URL, // Add this line
        SUPABASE_KEY: process.env.SUPABASE_KEY, // Add this line
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff2|woff|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;

