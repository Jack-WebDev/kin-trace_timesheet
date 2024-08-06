
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
          { protocol: "http", hostname: "dummyimage.com" },
          { protocol: "https", hostname: "picsum.photos" },
          { protocol: "https", hostname: "loremflickr.com" },
        ],
      },
};

export default config;
