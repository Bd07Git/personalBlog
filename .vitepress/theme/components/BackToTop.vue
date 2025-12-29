<template>
  <transition name="fade">
    <div 
      v-show="show" 
      class="back-to-top" 
      @click="scrollToTop"
      :title="`滚动进度: ${Math.round(progress)}%`"
    >
      <svg class="progress-circle" viewBox="0 0 100 100">
        <circle 
          class="progress-circle-bg" 
          cx="50" cy="50" r="45" 
        />
        <circle 
          class="progress-circle-bar" 
          cx="50" cy="50" r="45" 
          :style="{ strokeDashoffset: strokeDashoffset }"
        />
      </svg>
      <div class="rocket-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.812 2.002a.996.996 0 0 0-.812 0 11.95 11.95 0 0 0-5.116 3.673c-1.493 1.702-2.35 3.89-2.487 6.103l-.005.123.002.234c.011.607.07 1.212.174 1.81l.046.24c.161.793.422 1.566.776 2.301l.105.21c.307.596.69 1.154 1.138 1.663l.178.196a11.91 11.91 0 0 0 2.302 1.935l.208.126c.603.35 1.245.63 1.913.836l.247.07c.755.203 1.532.317 2.318.34l.238.003.238-.003c.786-.023 1.563-.137 2.318-.34l.247-.07c.668-.206 1.31-.486 1.913-.836l.208-.126a11.91 11.91 0 0 0 2.302-1.935l.178-.196c.448-.509.831-1.067 1.138-1.663l.105-.21c.354-.735.615-1.508.776-2.301l.046-.24c.104-.598.163-1.203.174-1.81l.002-.234-.005-.123c-.137-2.213-.994-4.401-2.487-6.103a11.95 11.95 0 0 0-5.116-3.673zM12 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-1-9V6h2v3h-2z"/>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const show = ref(false)
const progress = ref(0)
const circumference = 2 * Math.PI * 45 // 圆周长

const strokeDashoffset = computed(() => {
  return circumference - (progress.value / 100) * circumference
})

const updateProgress = () => {
  const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  
  if (scrollHeight > 0) {
    progress.value = (scrollTop / scrollHeight) * 100
  }
  
  // 降低阈值：滚动超过 100px 就显示，让它更灵敏
  show.value = scrollTop > 100
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 48px;
  height: 48px;
  background: var(--vp-c-bg);
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.progress-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-circle-bg {
  fill: none;
  stroke: var(--vp-c-gutter);
  stroke-width: 4;
}

.progress-circle-bar {
  fill: none;
  stroke: var(--vp-c-brand-1);
  stroke-width: 4;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.1s linear;
  stroke-dasharray: 282.7; /* 2 * PI * 45 */
}

.rocket-icon {
  width: 24px;
  height: 24px;
  color: var(--vp-c-brand-1);
  z-index: 1;
  transition: transform 0.3s ease;
}

.back-to-top:hover .rocket-icon {
  transform: scale(1.1);
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

@media (max-width: 640px) {
  .back-to-top {
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
  }
  .rocket-icon {
    width: 20px;
    height: 20px;
  }
}
</style>