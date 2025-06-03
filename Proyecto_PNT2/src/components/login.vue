<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <h1>OrtDemand</h1>
      <h2>Iniciar Sesión</h2>
      <label>
        Usuario
        <input v-model="username" type="text" required />
      </label>
      <label>
        Contraseña
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login-success'])

const username = ref('')
const password = ref('')

function login() {
  if (username.value === 'admin' && password.value === '1234') {
    emit('login-success')
  } else {
    alert('Credenciales incorrectas')
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background-color: #121212;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.login-form {
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.login-form h2 ,h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: #90caf9;
}

.login-form label {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
}

.login-form input {
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 1rem;
}

.login-form input:focus {
  outline: 2px solid #90caf9;
}

.login-form button {
  padding: 0.75rem;
  background-color: #90caf9;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #64b5f6;
}
</style>