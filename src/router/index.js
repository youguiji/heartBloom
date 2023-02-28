/*
 * @Description:
 * @Version:
 * @Autor: Austral
 * @Date: 2023-02-14 19:56:53
 * @LastEditors: Austral
 * @LastEditTime: 2023-02-25 14:57:15
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/login.vue"),
    },
  ],
});

export default router;
