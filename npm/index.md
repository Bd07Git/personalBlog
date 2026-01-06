# npm 详解

npm (Node Package Manager) 是 Node.js 的默认包管理器，也是世界上最大的软件注册表。

---

## 1. 核心组成部分
- **网站**：用于发现包、设置配置文件等。
- **注册表 (Registry)**：一个巨大的数据库，保存着每个包的信息。
- **命令行界面 (CLI)**：开发者用来与包进行交互的工具。

---

## 2. 常用基础命令

### 初始化
- `npm init`: 交互式创建 `package.json`。
- `npm init -y`: 快速生成默认配置。

### 安装依赖
- `npm install <pkg>`: 安装包并写入 `dependencies`。
- `npm install <pkg> -D`: 安装开发依赖，写入 `devDependencies`。
- `npm install <pkg> -g`: 全局安装。
- `npm i`: 根据 `package.json` 安装所有依赖。

### 更新与卸载
- `npm update <pkg>`: 更新包。
- `npm uninstall <pkg>`: 卸载包。

### 运行脚本
- `npm run <script-name>`: 执行 `package.json` 中 `scripts` 定义的命令。

---

## 3. package.json vs package-lock.json

### package.json
记录项目依赖的**大致版本范围**，以及项目的元数据（名称、版本、脚本等）。

### package-lock.json
- **锁定版本**：记录当前安装的每一个依赖的具体版本号，确保团队成员安装的依赖完全一致。
- **缓存依赖关系**：记录依赖的下载地址和哈希值，提高后续安装速度。

---

## 4. 语义化版本控制 (SemVer)
npm 使用语义化版本号，格式为 `X.Y.Z`（主版本号.次版本号.修订号）。

- **`^1.2.3` (Caret)**：兼容更新。允许更新到不改变最左边非零数字的版本（通常是更新 Y 和 Z）。
- **`~1.2.3` (Tilde)**：修订更新。只允许更新到最新的修订号（只更新 Z）。
- **`1.2.3`**：固定版本。必须安装该特定版本。
- **`*`**：任意版本。

---

## 5. 依赖分类
- **dependencies**：运行项目所必需的包（如 Vue, React, lodash）。
- **devDependencies**：仅在开发和测试阶段需要的包（如 Webpack, ESLint, Vite）。
- **peerDependencies**：同级依赖。插件通常使用此字段要求宿主环境必须安装特定版本的包。

---

## 6. 常用技巧
- **查看已安装包**：`npm list --depth=0`。
- **清理缓存**：`npm cache clean --force`。
- **查看包信息**：`npm view <pkg> versions`。

## 7. 常见问题
**为什么可以直接npm start？而不用npm run start呢？**

这是一个非常经典且有趣的 npm 细节。
简单来说，这是因为 npm start 是 npm 的内置快捷命令（Shorthand）。
1. 为什么可以省略 run？
npm 为了提高开发效率，为几个最常用的脚本命令设置了“特权”，允许你直接调用而不需要加 run。这些命令包括：
```
npm start
npm test
npm stop
npm restart
```
除了这几个特定的命令外，其他所有自定义脚本（比如 npm run dev、npm run build）都必须加上 run。

2. npm start 的特殊默认行为
即使你没有在 package.json 的 scripts 字段里定义 start，如果你运行 npm start，它也会尝试执行一个默认操作：
如果项目根目录下存在 server.js 文件，npm 会默认执行 node server.js。

3. 为什么 npm install 也不用 run？
这里需要区分一下：
install、publish、login 等是 npm 的原生指令（Commands），它们本身就是 npm 工具的一部分。
start、test 则是 脚本命令（Scripts）。
通常情况下，原生指令不需要 run，而脚本命令需要。start 和 test 只是因为太常用了，所以被 npm 破例提升到了和原生指令一样的调用待遇。
总结
你可以把 npm start 理解为 npm run start 的官方简写版。两者在功能上是完全等价的，但少打四个字母（run 加一个空格）确实能让开发体验更爽一点。