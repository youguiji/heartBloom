<template>
  <div class="box">
    <div class="title">HeartBloom</div>
    <div class="littleTile">让心开花</div>
    <div class="loginBox">
      <div class="tab" v-for="item in state.tab" :key="item.index">
        <div :class="{ active: item.isActive }" class="tabItem">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const tab = ref([
      {
        index: 1,
        name: "密码登录",
        isActive: true,
      },
      {
        index: 2,
        name: "验证码登录",
        isActive: false,
      },
    ]);
    const state = reactive({
      tab: [
        {
          index: 1,
          name: "密码登录",
        },
        {
          index: 2,
          name: "验证码登录",
        },
      ],
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss">
.box {
  width: 100%;
  height: 100%;
  background-color: var(--bg);
  .title {
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    color: var(--themeColor);
  }
  .littleTile {
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    color: var(--themeColor);
  }
  .loginBox {
    width: 700px;
    height: 500px;
    background-color: #fff;
    margin: 10px auto;

    .tabBox {
      width: 80%;
      height: 50px;
      .tabItem {
        width: 30%;
        background-color: pink;
      }
    }
  }
}
</style>