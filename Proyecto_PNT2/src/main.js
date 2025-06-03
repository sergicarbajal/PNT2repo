import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import login from './components/Login.vue'


const routes=
[
    {path:'/',component:login},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

    createApp(App).use(router).mount('#app');
    //cambio de la ruta a home
