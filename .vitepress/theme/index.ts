import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import Busuanzi from './components/Busuanzi.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 使用 layout-bottom 插槽，将其放在页面最底部
      'layout-bottom': () => h(Busuanzi)
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('Busuanzi', Busuanzi)
  }
}