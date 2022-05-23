import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  title: "Daughter of the Void -- Kai'Sa",
  favicon: '/favicon.ico',
});
