<template>
  <div class="ai-nav-section">
    <h2 class="ai-nav-title">AI 导航</h2>
    <div class="ai-nav-grid">
      <a v-for="item in aiTools" :key="item.title" :href="item.link" target="_blank" class="ai-nav-card">
        <div class="ai-nav-icon">
          <img :src="item.icon" :alt="item.title" @error="handleIconError" />
        </div>
        <div class="ai-nav-info">
          <div class="ai-nav-name">{{ item.title }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const aiTools = [
  { title: '深度求索 DeepSeek', icon: 'https://www.deepseek.com/favicon.ico', link: 'https://www.deepseek.com/' },
  { title: 'Kimi Chat (月之暗面)', icon: 'https://kimi.moonshot.cn/favicon.ico', link: 'https://kimi.moonshot.cn/' },
  { title: '通义千问 (阿里)', icon: '	https://img.alicdn.com/imgextra/i4/O1CN01EfJVFQ1uZPd7W4W6i_!!6000000006051-2-tps-112-112.png', link: 'https://tongyi.aliyun.com/' },
  { title: '文心一言 (百度)', icon: 'https://eb-static.cdn.bcebos.com/logo/favicon.ico', link: 'https://yiyan.baidu.com/' },
  { title: 'ChatGPT (OpenAI)', icon: 'https://openai.com/favicon.ico', link: 'https://chat.openai.com/' },
  { title: 'v0 Chat (Vercel)', icon: 'https://v0.app/assets/icon.svg', link: 'https://v0.dev/' },
  { title: 'Grok Chat (xAI)', icon: 'https://grok.com/favicon.ico', link: 'https://grok.com/' },
  { title: 'Notion AI (笔记)', icon: 'https://www.notion.so/images/favicon.ico', link: 'https://www.notion.so/' },
  { title: '腾讯元宝 (腾讯)', icon: 'https://yuanbao.tencent.com/favicon.ico', link: 'https://yuanbao.tencent.com/' },
  { title: '豆包 (字节跳动)', icon: 'public/doubao.png', link: 'https://www.doubao.com/' },
  { title: '智谱清言 (ChatGLM)', icon: 'https://chatglm.cn/favicon.ico', link: 'https://chatglm.cn/' },
  { title: '讯飞星火 (科大讯飞)', icon: 'https://xinghuo.xfyun.cn/favicon.ico', link: 'https://xinghuo.xfyun.cn/' },
  { title: '天工 AI (昆仑万维)', icon: 'https://www.tiangong.cn/favicon.ico', link: 'https://www.tiangong.cn/' },
  { title: '海螺问问 (MiniMax)', icon: 'https://hailuoai.com/favicon.ico', link: 'https://hailuoai.com/' }
]

const handleIconError = (e) => {
  // 如果图标加载失败，显示一个通用的 AI 图标或占位图
  e.target.src = 'https://api.iconify.design/fluent:bot-24-filled.svg?color=%23888888'
}
</script>

<style scoped>
.ai-nav-section {
  margin-top: 40px;
  padding: 0 24px;
}

.ai-nav-title {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.ai-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}

.ai-nav-card {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-bg-soft);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none !important;
}

.ai-nav-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.ai-nav-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.ai-nav-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.ai-nav-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 640px) {
  .ai-nav-grid {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .ai-nav-card {
    padding: 10px;
  }
  .ai-nav-icon {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
  .ai-nav-name {
    font-size: 12px;
  }
}
</style>