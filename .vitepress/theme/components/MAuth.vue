<template>
  <div v-if="isAuthorized">
    <slot />
  </div>
  <div v-else class="auth-container">
    <div class="auth-card">
      <div class="auth-icon">🔒</div>
      <h2>私密内容，请申请访问权限</h2>
      <p>该页面包含博主的私密笔记，如需查看请联系博主获取访问密钥。</p>
      <div class="auth-form">
        <input 
          v-model="password" 
          type="password" 
          placeholder="请输入访问密钥" 
          @keyup.enter="checkAuth"
        />
        <button @click="checkAuth">提交申请</button>
      </div>
      <p v-if="error" class="error-msg">密钥错误，请重新输入</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isAuthorized = ref(false)
const password = ref('')
const error = ref(false)

// 这里设置您的私密密钥（建议实际使用时进行简单的混淆或哈希）
const CORRECT_KEY = 'my_secret_key_2026' 

onMounted(() => {
  const savedKey = localStorage.getItem('blog_auth_key')
  if (savedKey === CORRECT_KEY) {
    isAuthorized.value = true
  }
})

const checkAuth = () => {
  if (password.value === CORRECT_KEY) {
    localStorage.setItem('blog_auth_key', password.value)
    isAuthorized.value = true
    error.value = false
  } else {
    error.value = true
    password.value = ''
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 40px 20px;
}

.auth-card {
  max-width: 400px;
  width: 100%;
  text-align: center;
  padding: 40px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.auth-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 16px;
  border: none;
}

p {
  color: var(--vp-c-text-2);
  font-size: 14px;
  margin-bottom: 24px;
}

.auth-form {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

button {
  padding: 10px 20px;
  background-color: var(--vp-c-brand-1);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.8;
}

.error-msg {
  color: #ff5f56;
  margin-top: 12px;
  font-weight: bold;
}
</style>