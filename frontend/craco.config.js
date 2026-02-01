const path = require("path");
require("dotenv").config();

// Environment flags
const isDevServer = process.env.NODE_ENV !== "production";
const enableHealthCheck = process.env.ENABLE_HEALTH_CHECK === "true";
const enableVisualEdits = isDevServer;

// Conditional plugin loading
let setupDevServer, babelMetadataPlugin;
if (enableVisualEdits) {
  setupDevServer = require("./plugins/visual-edits/dev-server-setup");
  babelMetadataPlugin = require("./plugins/visual-edits/babel-metadata-plugin");
}

let WebpackHealthPlugin, setupHealthEndpoints, healthPluginInstance;
if (enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

module.exports = {
  eslint: {
    configure: {
      extends: ["plugin:react-hooks/recommended"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  },
  webpack: {
    alias: {
      // Make sure '@' always points to src
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      webpackConfig.watchOptions = {
        ...webpackConfig.watchOptions,
        ignored: ["**/node_modules/**", "**/.git/**", "**/build/**", "**/dist/**", "**/coverage/**", "**/public/**"],
      };

      if (enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }

      return webpackConfig;
    },
  },
  babel: enableVisualEdits && babelMetadataPlugin ? { plugins: [babelMetadataPlugin] } : undefined,
  devServer: (devServerConfig) => {
    if (enableVisualEdits && setupDevServer) devServerConfig = setupDevServer(devServerConfig);
    if (enableHealthCheck && setupHealthEndpoints && healthPluginInstance) {
      const originalSetupMiddlewares = devServerConfig.setupMiddlewares;
      devServerConfig.setupMiddlewares = (middlewares, devServer) => {
        if (originalSetupMiddlewares) middlewares = originalSetupMiddlewares(middlewares, devServer);
        setupHealthEndpoints(devServer, healthPluginInstance);
        return middlewares;
      };
    }
    return devServerConfig;
  },
};
