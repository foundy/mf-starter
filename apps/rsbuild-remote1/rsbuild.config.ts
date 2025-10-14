import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: {
    port: 3001,
  },
  source: {
    entry: {
      index: './index.ts',
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'rsbuildRemote1',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.1' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.1' },
      },
    }),
  ],
});
