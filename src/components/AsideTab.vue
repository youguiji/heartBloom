<template>
  <div class="asideBox">
    <div
      :class="{active:item.isActive}"
      class="tabItem"
      v-for=" (item,index) in state"
      :key="index"
      @click="swichTab(item)"
    >
    <span>{{ item.name }}</span>
  </div>
  <!-- 我的主页 -->
  <mypage v-if="state[0].isActive">
    <template #mapage></template>
  </mypage>
  <!-- 个人资料 -->
  <personnalData v-if="state[1].isActive">
    <template #personnalData></template>
  </personnalData>
  <!-- 我的设置 -->
  <setting v-if="state[2].isActive">
    <template #setting></template>
  </setting>
  <!-- 树洞 -->
  <treeHole v-if="state[3].isActive">
    <template #treeHole></template>
  </treeHole>
  </div>
  
</template>

<script setup>
import { reactive, ref } from "vue";

const state = ref([
  {
    index: 0,
    name: "我的主页",
    isActive: true,
  },
  {
    index: 1,
    name: "个人资料",
    isActive: false,
  },
  {
    index: 2,
    name: "我的设置",
    isActive: false,
  },
  {
    index: 3,
    name: "树洞",
    isActive: false,
  },
]);
const swichTab = (event) => {
  console.log(event.index)
  state.value.forEach((element) => {
    if (event.index == element.index) {
      element.isActive = true;
    } else {
      element.isActive = false;
    }
  });
};
</script>

<style lang="scss" scoped>
.asideBox {
  width: 200px;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .tabItem {
    width: 95%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 16px;
    span {
      font-size: 14px;
    }
  }
}
.active {
  background-color: var(--sidePink);
  color: #fff;
}
.right {
  width: 100%;
  background-color: pink;
}
</style>