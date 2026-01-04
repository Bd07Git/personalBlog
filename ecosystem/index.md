# 前端生态

这里收集了前端开发中常用的工具、框架和库，涵盖了从开发到部署的各个环节。

---

<script setup>
const navData = [
  {
    title: '包管理工具',
    items: [
      { title: 'npm', desc: 'Node.js 官方包管理工具，拥有世界上最大的 JavaScript 生态系统。', link: 'https://www.npmjs.com/', badge: '热门' },
      { title: 'yarn', desc: 'Facebook 开发的包管理工具，提供快速、安全、可靠的依赖管理。', link: 'https://yarnpkg.com/' },
      { title: 'pnpm', desc: '高效的包管理器，通过硬链接节省磁盘空间，解决 node_modules 混乱。', link: 'https://pnpm.io/', badge: '热门' },
      { title: 'nvm', desc: 'Node.js 版本管理工具，支持多版本切换。', link: 'https://github.com/nvm-sh/nvm', badge: '热门' },
      { title: 'fnm', desc: '基于 Rust 实现的 Node.js 版本管理器，极速体验。', link: 'https://github.com/Schniz/fnm', badge: '热门' },
      { title: 'corepack', desc: 'Node.js 内置的包管理器管理器，统一 yarn/pnpm 体验。', link: 'https://nodejs.org/api/corepack.html' },
      { title: 'Bun', desc: '新兴的 JavaScript 运行时，内置极速包管理器。', link: 'https://bun.sh/' }
    ]
  },
  {
    title: '构建工具(工程化)',
    items: [
      { title: 'webpack', desc: '功能强大的打包工具，支持代码分割、模块化等高级功能。', link: 'https://webpack.js.org/', badge: '热门' },
      { title: 'Rollup', desc: 'ES 模块打包器，适合库开发，支持 Tree-shaking。', link: 'https://rollupjs.org/', badge: '热门' },
      { title: 'esbuild', desc: '极速 JavaScript 打包器，基于 Go 语言开发。', link: 'https://esbuild.github.io/', badge: '热门' },
      { title: 'vite', desc: '下一代的前端构建工具，开发环境基于原生 ESM，生产使用 Rollup。', link: 'https://vitejs.dev/', badge: '热门' },
      { title: 'Turbopack', desc: 'Webpack 作者开发的 Rust 版构建工具，速度极快。', link: 'https://turbo.build/pack' },
      { title: 'rsbuild', desc: '基于 Rust 的前端构建工具，速度极快。', link: 'https://rsbuild.dev/', badge: '热门' },
      { title: 'Rome', desc: '一体化前端工具链，包含编译、打包、lint 等功能。', link: 'https://rome.tools/' },
      { title: 'Parcel', desc: '零配置打包工具，支持多种类型资源处理。', link: 'https://parceljs.org/' }
    ]
  },
  {
    title: '任务运行器',
    items: [
      { title: 'gulp', desc: '基于流的自动化构建工具。', link: 'https://gulpjs.com/' },
      { title: 'Grunt', desc: '老牌 JavaScript 任务运行器。', link: 'https://gruntjs.com/' },
      { title: 'npm scripts', desc: '利用 npm 自带的脚本功能实现任务自动化。', link: 'https://docs.npmjs.com/cli/v9/using-npm/scripts' }
    ]
  },
  {
    title: '代码质量工具',
    items: [
      { title: 'ESLint', desc: '可插拔的 JavaScript 代码检查工具。', link: 'https://eslint.org/' },
      { title: 'Prettier', desc: '代码格式化工具，支持多种语言。', link: 'https://prettier.io/' },
      { title: 'Stylelint', desc: '现代 CSS/SCSS/Less 代码检查工具。', link: 'https://stylelint.io/' },
      { title: 'Commitlint', desc: 'Git 提交信息规范检查工具。', link: 'https://commitlint.js.org/' },
      { title: 'Husky', desc: 'Git 钩子工具，可在提交前运行检查。', link: 'https://typicode.github.io/husky/' }
    ]
  },
  {
    title: '模块联邦与微前端框架',
    items: [
      { title: 'qiankun', desc: '基于 single-spa 的微前端方案，生产级技术栈。', link: 'https://qiankun.umijs.org/' },
      { title: 'single-spa', desc: '最早的微前端框架，生态丰富社区活跃。', link: 'https://single-spa.js.org/' },
      { title: 'micro-app', desc: '京东微前端方案，基于 WebComponent + 沙箱隔离。', link: 'https://micro-zoe.github.io/micro-app/' },
      { title: 'icestark', desc: '阿里微前端方案，Vite + Webpack 双端支持。', link: 'https://micro-frontends.ice.work/' },
      { title: 'Module Federation', desc: 'Webpack 5 核心特性，支持模块跨端运行时共享。', link: 'https://webpack.js.org/concepts/module-federation/' },
      { title: 'Bit', desc: '组件化开发框架，独立发布复用可扩展。', link: 'https://bit.dev/' },
      { title: 'PrintJS', desc: '模块化前端式框架，插件机制灵活适合。', link: 'https://printjs.crabbly.com/' },
      { title: 'Garfish', desc: '字节跳动微前端方案，自动加载微应用。', link: 'https://www.garfishjs.org/' },
      { title: 'Mosaic', desc: 'Zalando 微前端框架，聚焦服务端拼装。', link: 'https://www.mosaic9.org/' },
      { title: 'Luigi', desc: 'SAP 微前端框架，统一导航在底层管理。', link: 'https://luigi-project.io/' }
    ]
  }
]
</script>

<MNavLinks :data="navData" />