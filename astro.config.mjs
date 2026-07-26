import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      // Optimize React component loading
      experimental: {
        reactOptimize: true
      }
    })
  ],
  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      // Optimize bundle size
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/@radix-ui/') ||
                id.includes('node_modules/class-variance-authority/') ||
                id.includes('node_modules/clsx/') ||
                id.includes('node_modules/tailwind-merge/')) {
              return 'ui-vendor';
            }
            if (id.includes('node_modules/lucide-react/')) {
              return 'icons';
            }
          }
        }
      }
    }
  }
});
