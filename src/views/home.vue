<template>
  <div>
    <div class="mod-header">
      <div class="mod-box fix">
        <div class="logo">
          <img src="@/assets/images/logo.png" />
        </div>
        <div class="welcome">
          欢迎来到纵购！请
          <router-link class="welcome-item" to="/">[登录]</router-link>
          <router-link class="welcome-item" to="/">[免费注册]</router-link>
        </div>
        <div class="menu fix">
          <router-link class="menu-item" to="/">我的店铺</router-link>
          <router-link class="menu-item" to="/">销售中心</router-link>
          <router-link class="menu-item" to="/">库存管理</router-link>
          <router-link class="menu-item" to="/">采购管理</router-link>
          <router-link class="menu-item" to="/">我要入驻</router-link>
          <router-link class="menu-item" to="tel:400-930-212"
            >咨询:400-930-2128</router-link
          >
        </div>
      </div>
    </div>
    <div class="mod-bg-1"></div>
    <div class="mod-bg-2"></div>
    <div class="mod-bg-3"></div>
    <div class="mod-bg-4"></div>
    <div class="mod-bg-5"></div>
    <div class="mod-bg-6">做五金建材生意，就用 纵购商城 系统！</div>
    <div class="mod-footer">
      <copyright />
    </div>
  </div>
</template>

<script>
import Copyright from "@/components/copyright";

export default {
  components: {
    Copyright
  }
};
</script>

<style>
.mod-header {
  height: 67px;
  padding: 16px 0;
  background: #fabe00;
  border-bottom: 6px solid #4b4a48;
  .logo {
    float: left;
    margin-right: 10px;
  }
  .welcome {
    float: left;
    margin-top: 37px;
    line-height: 30px;
    .welcome-item {
      display: inline-block;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .menu {
    float: right;
    margin-top: 37px;
    line-height: 30px;
    .menu-item {
      float: left;
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
.mod-bg-1 {
  height: 480px;
  background: url("~@/assets/images/bg-home-1.png") center no-repeat;
}
.mod-bg-2 {
  height: 560px;
  background: url("~@/assets/images/bg-home-2.png") center no-repeat;
}
.mod-bg-3 {
  height: 600px;
  background: url("~@/assets/images/bg-home-3.png") center no-repeat;
}
.mod-bg-4 {
  height: 560px;
  background: url("~@/assets/images/bg-home-4.jpg") center no-repeat;
}
.mod-bg-5 {
  height: 560px;
  background: url("~@/assets/images/bg-home-5.png") center no-repeat;
}
.mod-bg-6 {
  font-family: "微软雅黑 Oblique", "微软雅黑";
  font-style: oblique;
  font-size: 36px;
  text-align: center;
  height: 100px;
  line-height: 100px;
  color: #fff;
  background: url("~@/assets/images/bg-home-6.png") center no-repeat;
  background-size: auto 100px;
}
.mod-footer {
  height: 100px;
  background-color: #666;
  padding-top: 40px;
}
</style>
