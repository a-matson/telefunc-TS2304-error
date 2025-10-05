import type { NextConfig } from "next";

import withTelefunc from "telefunc/next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default withTelefunc(nextConfig);
