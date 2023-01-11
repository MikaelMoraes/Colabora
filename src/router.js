
import { createRouter, createWebHistory } from 'vue-router'
import HomeColabora from '@/components/layouts/HomeColabora.vue'
import PaginaInicial from '@/components/layouts/PaginaInicial.vue'
import LoginColab from '@/components/comuns/LoginColab.vue'


const routes = [
    {
        path:'/',
        component: PaginaInicial
    },
    {
        path:'/login',
        component: LoginColab
    },
    {
        path:'/feed',
        component: HomeColabora
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
