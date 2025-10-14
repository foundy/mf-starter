import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'rsbuild-host',
      remotes: {
        '@apps/remote1': 'rsbuild-remote1@http://localhost:3001/mf-manifest.json',
        '@apps/remote2': 'rsbuild-remote2@http://localhost:3002/mf-manifest.json',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.1' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.1' },
      },
    }),
  ],
});
