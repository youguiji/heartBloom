/*
 * @Description:
 * @Version:
 * @Autor: Austral
 * @Date: 2023-02-14 19:56:53
 * @LastEditors: Austral
 * @LastEditTime: 2023-03-12 16:03:36
 */
import {
  createRouter,
  createWebHistory
} from "vue-router";

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: "/",
      name: "login",
      component: () => import("../views/Login/Login.vue"),
    },
    {
      path: '/main',
      name: 'main',
      component: () => import("@/components/TopBar.vue"),
      children:[
        {
          path:'/home',
          name:'home',
          component:()=>import('@/views/Home/Home.vue')
        },
      ]
    },
    
  ],
});

export default router;