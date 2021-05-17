const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["shared"]);
const withImages = require("next-images");

const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = withPlugins([withTM(), withImages], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
});

const SentryWebpackPluginOptions = {};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
