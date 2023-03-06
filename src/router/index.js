/*
 * @Description:
 * @Version:
 * @Autor: Austral
 * @Date: 2023-02-14 19:56:53
 * @LastEditors: Austral
 * @LastEditTime: 2023-02-28 20:05:10
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",

      component: () => import("../views//Login/Login.vue"),
    },
  ],
});

export default router;
