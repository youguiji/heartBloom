<!--
 * @Descri
  components: { Article },ption: 
 * @Version: 
 * @Autor: Austral
 * @Date: 2023-03-06 18:53:24
 * @LastEditors: Austral
 * @LastEditTime: 2023-03-14 20:08:23
-->
<template>
  <div class="homePage">
    <div class="header">
      <!-- logo模块 -->
      <img src="@/assets/image/logo.png">
      <!-- 导航模块 -->
      <ul>
        <li
          v-for="(value,key) in tabs"
          :key="key"
          :class="{active:currentTab === key}"
          @click="currentTab = key"
        >{{ key }}</li>
      </ul>
      <!-- 搜索栏 -->
      <div class="container">
        <input
          type="text"
          class="search"
        >
        <i class="ri-search-line"></i>
      </div>
      <!-- 用户信息 -->
      <div class="users">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F11%2F20210711101603_fd40d.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681223369&t=f914597982bb0abf490cbcd3d607f79f"
          class="avatarInput"
        >
        <span class="name">Austral</span>
      </div>
    </div>
    <Home v-if="currentTab==='首页'" />
    <Article v-if="currentTab==='心理文章'" />
    <Forum v-else />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Home from "@/views/Home/Home.vue";
import Article from "@/views/Article/Article.vue";
import Forum from "@/views/Forum/Forum.vue";

const currentTab = ref("首页");

const tabs = {
  首页: "Home",
  心理文章: "Article",
  心理论坛: "Form",
};
</script>

<style lang="scss">
.active {
  border-bottom: 2px solid var(--themeColor);
  font-weight: 600;
  color: #000;
}
.header {
  width: 100%;
  height: 62px;
  padding: 0 20px;
  min-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    margin-left: -100px;
  }
  ul {
    display: flex;
    height: 80%;
    font-size: 15px;
    margin-left: -200px;
    color: var(--gray3);
    li {
      height: 70%;
      padding: 10px 0 0 0;
      margin-left: 20px;
      &:hover {
        font-weight: 600;
        color: #000;
      }
    }
  }

  .container {
    width: 300px;
    height: 60%;
    border-radius: 24px;
    background-color: var(--deepbg);
    input {
      width: 85%;
      margin-left: 10px;
      height: 100%;
      background-color: var(--deepbg);
    }
  }
  .users {
    width: 80px;
    height: 30px;
    display: flex;
    align-content: center;
    .avatarInput {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .name {
      font-size: 16px;    
      margin: 0 10px;
    }
  }
}
</style>