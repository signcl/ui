import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/storybook/',
        destination: '/storybook/index.html',
      },
    ]
  },
  // https://github.com/shadcn-ui/registry-template/blob/main/next.config.ts
  outputFileTracingIncludes: {
    components: ['./components/**/*'],
  },
  /* config options here */
}

export default nextConfig
