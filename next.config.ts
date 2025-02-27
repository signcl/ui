import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // https://github.com/shadcn-ui/registry-template/blob/main/next.config.ts
  outputFileTracingIncludes: {
    components: ['./components/**/*'],
  },
  /* config options here */
}

export default nextConfig
