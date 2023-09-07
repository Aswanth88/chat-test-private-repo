const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    supabase: {
      client: {
        auth: {
          persistSession: false // or true
        },
        SUPABASE_URL: 'https://hkjshlrvjeypvpvlevku.supabase.co', // Include SUPABASE_URL
        SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhranNobHJ2amV5cHZwdmxldmt1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjcyNDQ1OCwiZXhwIjoyMDA4MzAwNDU4fQ.-_bEcqUS7jLJfiORT7xM8Lpkfg-ZXib3es6q3Q3NRYA', // Include SUPABASE_KEY
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
