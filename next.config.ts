import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // https://github.com/shadcn-ui/registry-template/blob/main/next.config.ts
  outputFileTracingIncludes: {
    registry: ['./registry/**/*'],
  },
  /* config options here */
}

export default nextConfig
