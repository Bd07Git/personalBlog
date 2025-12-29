<template>
  <div class="tools-section">
    <h2 class="tools-title">常用工具</h2>
    <div class="tools-grid">
      <a v-for="tool in tools" :key="tool.title" :href="tool.link" target="_blank" class="tool-card">
        <div class="tool-icon">
          <img :src="tool.icon" :alt="tool.title" />
        </div>
        <div class="tool-info">
          <div class="tool-name">{{ tool.title }}</div>
          <div class="tool-desc">{{ tool.desc }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const tools = [
  { title: 'Can I use', desc: '前端 API 兼容性查询', icon: 'https://caniuse.com/img/favicon-128.png', link: 'https://caniuse.com' },
  { title: 'TinyPNG', desc: '在线图片压缩工具', icon: 'https://tinypng.com/images/apple-touch-icon.png', link: 'https://tinypng.com' },
  { title: 'Grid布局生成器', desc: '可视化拖拽生成 grid 布局', icon: 'https://cssgrid-generator.netlify.app/favicon.ico', link: 'https://cssgrid-generator.netlify.app/' },
  { title: '开发者武器库', desc: '做开发者最专业最好用的工具箱', icon: 'https://devtool.tech/logo.svg', link: 'https://devtool.tech' },
  { title: '在线工具', desc: '开发人员的工具箱', icon: 'https://tool.lu/favicon.ico', link: 'https://tool.lu' },
  { title: 'Json 中文网', desc: 'JSON 在线解析及格式化验证', icon: 'https://www.json.cn/favicon.ico', link: 'https://www.json.cn' },
  { title: 'docsmall', desc: '免费的在线图片与 PDF 处理工具', icon: 'https://docsmall.com/favicon.png', link: 'https://docsmall.com' },
  { title: 'Emoji 图标', desc: '笑脸和情感相关表情符号合集', icon: 'https://www.emojiall.com/favicon.ico', link: 'https://emojipedia.org' },
  { title: '草料二维码', desc: '文本/网址/文件一键生成二维码', icon: 'https://static.clewm.net/static/images/favicon.ico', link: 'https://cli.im' }
]
</script>

<style scoped>
.tools-section {
  margin-top: 40px;
  padding: 0 24px;
}

.tools-title {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.tool-card {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-bg-soft);
  transition: all 0.25s;
  text-decoration: none !important;
}

.tool-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt);
  transform: translateY(-2px);
}

.tool-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.tool-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.tool-info {
  overflow: hidden;
}

.tool-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tool-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 640px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>