<template>
  <canvas ref="canvasRef" class="fireworks-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx = null
let particles = []
const colors = ['#ff3366', '#4488ff', '#22ff88', '#ffee66', '#ff9933']

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.color = colors[Math.floor(Math.random() * colors.length)]
    // 随机角度和速度
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 4 + 2
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    // 随机大小
    this.radius = Math.random() * 4 + 1
    // 生命周期
    this.alpha = 1
    this.decay = Math.random() * 0.015 + 0.015
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.alpha -= this.decay
    // 加上一点重力感
    this.vy += 0.05
  }

  draw() {
    ctx.save()
    ctx.globalAlpha = this.alpha
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

const createParticles = (x, y) => {
  const count = 12 // 每次点击生成的粒子数量
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y))
  }
}

const animate = () => {
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  
  particles = particles.filter(p => p.alpha > 0)
  particles.forEach(p => {
    p.update()
    p.draw()
  })
  
  requestAnimationFrame(animate)
}

const handleMouseDown = (e) => {
  createParticles(e.clientX, e.clientY)
}

const handleResize = () => {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
  }
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  handleResize()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousedown', handleMouseDown)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousedown', handleMouseDown)
})
</script>

<style scoped>
.fireworks-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* 确保不影响页面元素的点击 */
  z-index: 9999;
}
</style>