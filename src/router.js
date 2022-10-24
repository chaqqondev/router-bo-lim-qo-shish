import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage'
import DepartPage from '@/pages/DepartPage'
import NewsPage from '@/pages/NewsPage'
import ProjectPage from '@/pages/ProjectPage'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/news',
        component: NewsPage
    },
    {
        path: '/projects',
        component: ProjectPage
    },
    {
        path: '/depart',
        component: DepartPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router