# Cinq - 企业级 H5 开发框架

::: info 概览
**Cinq** 是一个基于 **Vite** 构建的高性能、可扩展的企业级 H5 开发框架。它通过对底层构建工具的深度封装，为开发者提供了“开箱即用”的多页面应用（MPA）开发体验，并集成了移动端适配、环境管理、自动化埋点等核心能力。
:::

## 🚀 快速上手

### 启动开发服务器
使用以下命令启动本地开发环境，支持热更新（HMR）和接口代理。
```bash
yarn dev
# 或者直接使用 cinq 命令行
npx cinq dev
```

### 项目打包
构建生产环境产物，输出至 `dist` 目录。
```bash
yarn build
# 或者
npx cinq build
```

---

## 🛠️ 核心封装能力

Cinq 不仅仅是一个构建工具，它针对 H5 开发的痛点做了大量封装：

### 1. 自动化多页面（MPA）管理
Cinq 会自动扫描 `src/pages/**/main.ts` 路径，将其识别为独立的页面入口。
*   **优势**：无需手动配置复杂的 `entry`，新增页面只需按目录结构创建文件即可。
*   **实现**：通过 `glob` 动态匹配文件系统，生成 Vite 的 `rollupOptions.input` 配置。

### 2. 移动端适配方案：`px2vw`
内置了 `usePx2vw` 转换能力，让开发者可以按照设计稿（如 750px）直接编写 `px`。
*   **配置示例**：
    ```typescript
    usePx2vw: {
        viewportWidth: 750,
        viewportUnit: 'vw',
        minPixelValue: 1, // 小于 1px 不转换，保持极细边框
    }
    ```

### 3. 增强型 Vue 开发体验
*   **vueSetupExtend**：支持在 `<script setup>` 标签上直接定义组件 `name`。
*   **routeNameBinding**：自动将目录结构与路由名称进行绑定，简化路由配置。

### 4. 企业级插件集成
*   **Dev Proxy**：内置 `pathRewrite` 能力，轻松解决跨域和接口路径映射问题。
*   **Coverage Report**：集成测试覆盖率报告，保障代码质量。
*   **Vue Demi**：支持 Vue 2/3 库的平滑过渡。

---

## 🏗️ 技术实现原理

Cinq 的底层架构逻辑如下：

### 1. 配置驱动
Cinq 通过 `cinq.config.ts` 集中管理所有配置。它采用 **合并策略**，将用户定义的配置与内置的 Vite 默认配置进行深度合并。

### 2. 构建流
Cinq CLI 接收指令后，会解析配置文件并启动 Vite 核心引擎，最终通过 Rollup 进行资源打包。

### 3. 运行时工具函数
Cinq 提供了 `renderedPx` 等运行时工具，通过 JS 动态计算当前视口的真实像素，解决了 CSS 无法覆盖的动态样式适配场景（如 Canvas 或内联 Style）。

---

## ✨ 核心优势

| 优势 | 说明 |
| :--- | :--- |
| **极致速度** | 基于 Vite，利用浏览器原生 ESM，实现秒级的启动和热更新。 |
| **零配置感** | 预设了大量 PostCSS、Less 和 Vite 插件，开发者只需关注业务逻辑。 |
| **灵活适配** | 完美解决移动端 1px 问题及各种屏幕比例的等比缩放。 |
| **环境隔离** | 通过 `templateEnv` 轻松管理不同环境（测试、预发、生产）的变量。 |

---

## 💡 最佳实践

::: tip 提示
在编写样式时，建议优先使用项目内置的 `common-function.less` 中的 Mixins，它们已经过 Cinq 的优化处理，能更好地配合 `vw` 适配方案。
:::

::: warning 注意
由于项目配置了 `minPixelValue: 1`，如果你需要实现 0.5px 的效果，请使用 `line-around` 等内置 Mixin，而不是直接写 `0.5px`。
:::

---

**Cinq** 旨在让 H5 开发变得更简单、更标准、更专业。
