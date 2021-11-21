import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import About from '../views/About.vue';
import Pomodoro from '../views/Pomodoro.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Pomodoro',
        component: Pomodoro,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;