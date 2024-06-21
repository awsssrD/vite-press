// .vitepress/theme/index.ts
import type { Theme } from "vitepress";
import Layout from './Layout.vue';
import DefaultTheme from "vitepress/theme";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    // app.component('MyGlobalComponent' /* ... */)
  },
} satisfies Theme;
