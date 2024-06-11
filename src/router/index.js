import { createRouter, createWebHistory } from "vue-router";
import RegisterUser from '@/components/RegisterUser.vue';
import InitUser from '@/components/InitUser.vue';
import Home from '@/components/Home.vue';
import CanteenSelection from '@/components/CanteenSelection.vue';
import FloorSelection from '@/components/FloorSelection.vue';
import SeatSelection from '@/components/SeatSelection.vue';
import Summary from '@/components/Summary.vue';
import Layout from '@/components/Admin.vue';
import Category from '@/components/Category.vue';
import LayoutHome from '@/components/LayoutHome.vue';
import RegisterAdmin from '@/components/RegisterAdmin.vue';
import InitAdmin from '@/components/InitAdmin.vue';
import SelectOpeate from '@/components/SelectOpeate.vue';
const routes = [
    {
        path: '/',
        redirect: '/home' // 添加默认重定向
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/registeruser',
        component: RegisterUser
    },
    {
        path: '/registeradmin',
        component: RegisterAdmin
    },
    {
        path: '/inituser',
        component: InitUser
    },
    {
        path: '/canteen',
        component: CanteenSelection
    },
    {
        path: '/floor',
        component: FloorSelection
    },
    {
        path: '/seat',
        component: SeatSelection
    },
    {
        path: '/summary',
        component: Summary
    },
    {
        path: '/admin',
        component: Layout,
        
        children: [
            {
                path: '',
                component: LayoutHome,
                props: true
            },

            {
                path: 'category/:id',
                component: Category,
                props: true
            }

        ],
        props: true 
    },
    {
        path: '/initadmin',
        component: InitAdmin
    },
    {
        path: '/selectopeate',
        component: SelectOpeate
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;