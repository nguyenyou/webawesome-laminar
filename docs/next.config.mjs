import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const IS_DEV = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: IS_DEV ? undefined : 'export',
  images: {
    unoptimized: true,
  }
};

export default withMDX(config);
