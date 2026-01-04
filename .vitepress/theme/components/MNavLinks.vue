<template>
  <div class="nav-links">
    <div v-for="group in data" :key="group.title" class="nav-section">
      <h2 :id="group.title" class="nav-group-title">
        {{ group.title }}
        <a class="header-anchor" :href="`#${group.title}`" aria-hidden="true">#</a>
      </h2>
      <div class="nav-grid">
        <a
          v-for="item in group.items"
          :key="item.title"
          :href="item.link"
          target="_blank"
          rel="noreferrer"
          class="nav-card"
        >
          <div class="nav-header">
            <div class="nav-title">
              <img v-if="item.icon" :src="item.icon" :alt="item.title" class="nav-icon" />
              {{ item.title }}
            </div>
            <span v-if="item.badge" :class="['nav-badge', getBadgeClass(item.badge)]">
              {{ item.badge }}
            </span>
          </div>
          <div class="nav-desc">{{ item.desc }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  }
})

const getBadgeClass = (badge) => {
  if (badge === '热门' || badge === 'Hot') return 'hot'
  if (badge === '新' || badge === 'New') return 'new'
  return 'recommend'
}
</script>

<style scoped>
.nav-section {
  margin-bottom: 48px;
}

.nav-group-title {
  margin: 32px 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 1.5rem;
  font-weight: 600;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.nav-card {
  display: block;
  padding: 16px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  text-decoration: none !important;
}

.nav-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.nav-title {
  font-weight: 600;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
}

.nav-badge {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
}

.nav-badge.hot { background-color: #ff5f56; }
.nav-badge.new { background-color: #27c93f; }
.nav-badge.recommend { background-color: #0098fd; }

.nav-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>