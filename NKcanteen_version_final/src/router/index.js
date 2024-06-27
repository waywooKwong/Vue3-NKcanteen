import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from '@/components/loginComponets/LoginUser.vue'
import RegisterUser from '@/components/registerComponets/RegisterUser.vue'
import Home from '@/components/loginComponets/Home.vue'
import CanteenSelection from '@/components/userComponets/CanteenSelection.vue'
import FloorSelection from '@/components/userComponets/FloorSelection.vue'
import SeatSelection from '@/components/userComponets/SeatSelection.vue'
import Summary from '@/components/userComponets/Summary.vue'
import Layout from '@/components/adminComponets/Admin.vue'
import Category from '@/components/userComponets/Category.vue'
import LayoutHome from '@/components/adminComponets/LayoutHome.vue'
import LoginAdmin from '@/components/loginComponets/LoginAdmin.vue'
import RegisterAdmin from '@/components/registerComponets/RegisterAdmin.vue'
import SelectOpeate from '@/components/userComponets/SelectOpeate.vue'
import Order from '@/components/userComponets/Order.vue'
const routes = [
  {
    path: '/',
    redirect: '/home', // 添加默认重定向
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/LoginUser',
    component: LoginUser,
  },
  {
    path: '/LoginAdmin',
    component: LoginAdmin,
  },
  {
    path: '/RegisterUser',
    component: RegisterUser,
  },
  {
    path: '/canteen',
    component: CanteenSelection,
  },
  {
    path: '/floor',
    component: FloorSelection,
  },
  {
    path: '/seat',
    component: SeatSelection,
  },
  {
    path: '/summary',
    component: Summary,
  },
  {
    path: '/admin',
    component: Layout,

    children: [
      {
        path: '',
        component: LayoutHome,
        props: true,
      },

      {
        path: 'category/:id',
        component: Category,
        props: true,
      },
    ],
    props: true,
  },
  {
    path: '/RegisterAdmin',
    component: RegisterAdmin,
  },
  {
    path: '/selectopeate',
    component: SelectOpeate,
  },
  {
    path: '/order',
    component: Order,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
