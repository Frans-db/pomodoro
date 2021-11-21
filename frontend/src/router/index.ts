import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import About from '../views/About.vue';
import Pomodoro from '../views/Pomodoro.vue';
import Overview from '../views/Overview.vue';

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
    {
        path: '/overview',
        name: 'Overview',
        component: Overview,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;