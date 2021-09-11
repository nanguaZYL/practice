import Router from 'vue-router';
import Vue from 'vue'

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: () => import('@/view'),
    }
]

const router = new Router({
    routes,
})
// router.beforeEach

export default router