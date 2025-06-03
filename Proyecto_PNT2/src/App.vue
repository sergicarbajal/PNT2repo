
<template>
<div>
 <!-- Mostrar login si no está autorizado -->
<LoginForm v-if="!isAuthorized" @login-success="handleLoginSuccess" />

 <!-- Mostrar contenido de rutas si está autorizado -->
 <div v-else>
 <p>✅ Bienvenido, estás autorizado.</p>
 <router-view />
 </div>
 </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from './components/Login.vue'

const isAuthorized = ref(false)

function handleLoginSuccess() 
{
   isAuthorized.value = true
}
</script>
