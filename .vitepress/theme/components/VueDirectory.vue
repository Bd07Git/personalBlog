<template>
  <div class="vue-directory-container">
    <div class="directory-header">
      <h1 class="directory-title">目录</h1>
      <div class="search-box">
        <span class="search-label">过滤</span>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="请输入关键字" 
          class="search-input"
        />
      </div>
    </div>

    <div v-for="group in filteredSidebarItems" :key="group.text" class="directory-group">
      <h2 class="group-title">{{ group.text }}</h2>
      <div class="list-container">
        <a 
          v-for="(item, index) in group.items" 
          :key="item.link" 
          :href="withBase(item.link)" 
          class="list-item"
        >
          <span class="item-index">{{ index + 1 }}.</span>
          <span class="item-text">{{ item.text }}</span>
        </a>
      </div>
    </div>

    <div v-if="filteredSidebarItems.length === 0" class="no-results">
      未找到相关内容
    </div>
  </div>
</template>

<script setup>
import { useData, withBase } from 'vitepress'
import { ref, computed } from 'vue'

const { theme } = useData()
const searchQuery = ref('')

// 从 themeConfig 中获取 Vue 的侧边栏配置
const sidebarItems = computed(() => {
  return theme.value.sidebar['/vue/'] || []
})

// 过滤逻辑
const filteredSidebarItems = computed(() => {
  if (!searchQuery.value.trim()) {
    return sidebarItems.value
  }
  
  const query = searchQuery.value.toLowerCase()
  
  return sidebarItems.value.map(group => {
    const filteredItems = group.items.filter(item => 
      item.text.toLowerCase().includes(query)
    )
    return {
      ...group,
      items: filteredItems
    }
  }).filter(group => group.items.length > 0)
})
</script>

<style scoped>
.vue-directory-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;
}

.directory-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.directory-title {
  font-size: 32px;
  font-weight: 600;
  color: #e67e22; /* 橙红色调 */
  margin: 0;
  border: none;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-label {
  font-size: 16px;
  color: #e67e22;
  font-weight: 500;
}

.search-input {
  width: 260px;
  padding: 8px 16px;
  border: 1px solid #e67e22;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  transition: all 0.3s;
}

.search-input:focus {
  box-shadow: 0 0 0 2px rgba(230, 126, 34, 0.2);
}

.directory-group {
  margin-bottom: 30px;
}

.group-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
  border: none;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  text-decoration: none !important;
  transition: all 0.2s;
  color: var(--vp-c-text-1);
}

.list-item:hover {
  border-color: #e67e22;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.item-index {
  margin-right: 12px;
  color: var(--vp-c-text-3);
  font-size: 14px;
  min-width: 24px;
}

.item-text {
  font-size: 16px;
  font-weight: 500;
}

.no-results {
  text-align: center;
  padding: 40px;
  color: var(--vp-c-text-3);
  font-style: italic;
}

/* 暗色模式适配 */
:deep(.dark) .list-item {
  background-color: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

:deep(.dark) .list-item:hover {
  border-color: #e67e22;
}

@media (max-width: 640px) {
  .directory-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .search-input {
    width: 100%;
  }
}
</style>