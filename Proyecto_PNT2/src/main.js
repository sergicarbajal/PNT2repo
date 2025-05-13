import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const routes=
[
    {path:'/home',component:App},
]
createApp(App).mount('#app')
//cambio de la ruta a home
