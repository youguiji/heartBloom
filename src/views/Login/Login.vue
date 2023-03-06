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
      <div v-if="tab[0].isActive == true" class="content">
        <div class="inputBox">
          <input placeholder="请输入手机号" />
        </div>
        <div class="inputBox">
          <input placeholder="请输入验证码" />
        </div>
        <button>登录/注册</button>
      </div>
      <div v-if="tab[1].isActive == true" class="content">验证码登录box</div>
      <div class="otherMethod">
        其他登录方式：
        <i class="ri-wechat-2-line"></i>
      </div>
      <div class="socialLogin">
        未注册手机验证后自动登录，注册即代表同意《隐私保护指引》
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
        name: "验证码登录",
        isActive: true,
      },
      {
        index: 2,
        name: "密码登录",
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
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .tabBox {
      width: 70%;
      height: 40px;
      display: flex;
      padding: 10px 0;
      margin: 20px auto;
      .active {
        border-bottom: 1px solid var(--deepPink);
        font-weight: 500;
        font-size: 16px;
      }
      .tabItem {
        width: 110px;
        height: 40px;
        font-size: 16px;
        display: flex;
        margin-right: 40px;
        justify-content: center;
        align-items: center;
      }
    }
    .content {
      width: 80%;
      .inputBox {
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--line);
      }
      button {
        width: 60%;
      }
    }
    .otherMethod {
      width: 40%;
      height: 50px;
      font-size: 12px;
      color:  var(--gray1);
      border-top: 1px solid var(--bg);
    }
    .socialLogin {
      font-size: 12px;
      color: var(--bg);
    }
  }
}
</style>