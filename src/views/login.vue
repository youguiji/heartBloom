<template>
  <div class="box">
    <div class="title">HeartBloom</div>
    <div class="littleTile">让心开花</div>
    <div class="loginBox">
      <div class="tabBox">
        <div
          class="tabItem"
          :class="{ active: item.isActive }"
          v-for="item in tab"
          :key="item.index"
          @click="changeTab(item.index)"
        >
          <span class="tabTitle">{{ item.name }}</span>
        </div>
      </div>
      <div v-if="tab[0].isActive == true" class="content">密码登录box</div>
      <div v-if="tab[1].isActive == true">验证码登录box</div>
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
    const changeTab = (event) => {
      tab.value.forEach((item) => {
        if (item.index === event) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
      console.log(event);
    };
    return {
      tab,
      changeTab,
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
    font-size: 36px;
    text-align: center;
    font-weight: 700;
    color: var(--themeColor);
  }
  .littleTile {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: var(--themeColor);
  }
  .loginBox {
    width: 700px;
    height: 500px;
    background-color: #fff;
    margin: 0 auto ;

    .tabBox {
      width: 80%;
      height: 40px;
      display: flex;
      padding: 20px 0;
      margin: 20px ;
      .active {
        border-bottom: 1px solid var(--deepPink);
      }
      .tabItem {
        width: 119px;
        height: 40px;
        font-size: 16px;
      }
      .content {
        width: 80%;
        
      }
    }
  }
}
</style>