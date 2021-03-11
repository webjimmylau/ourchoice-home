<template>
  <div class="page-home">
    <div class="mod-header">
      <div class="mod-box fix">
        <img class="logo" src="../assets/images/logo.png" />
        <div class="welcome">
          欢迎来到纵购！&emsp;请&emsp;
          <a href="/login">[登录]</a>&emsp;
          <a href="/register">[免费注册]</a>
        </div>
        <div class="menu">
          <a class="item" href="">我的店铺</a>
          <a class="item" href="">销售中心</a>
          <a class="item" href="">库存管理</a>
          <a class="item" href="">采购管理</a>
          <a class="item" href="">我要入驻</a>
          <a class="item" href="tel:400-930-2128">咨询:400-930-2128</a>
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
      <com-copyright />
    </div>
  </div>
</template>

<script>
  import ComCopyright from '@/components/com-copyright'

  export default {
    name: 'home',
    components: {
      ComCopyright
    },
    data() {
      return {};
    },
    beforeMount() {},
    methods: {}
  }
</script>

<style>
  .page-home {
    .mod-header {
      background-color: #fabe00;
      height: 100px;
      padding: 16px 0;
      border-bottom: 6px solid #4b4a48;

      .logo {
        float: left;
        width: 140px;
      }

      .welcome {
        float: left;
        padding: 44px 0 0 10px;
        line-height: 20px;
      }

      .menu {
        float: right;
        padding-top: 34px;

        .item {
          display: inline-block;
          padding: 10px;
          line-height: 20px;
        }
      }
    }

    .mod-bg-1 {
      height: 480px;
      background: url(../assets/images/bg-home-1.png) no-repeat center;
    }

    .mod-bg-2 {
      height: 560px;
      background: url(../assets/images/bg-home-2.png) no-repeat center;
    }

    .mod-bg-3 {
      height: 600px;
      background: url(../assets/images/bg-home-3.png) no-repeat center;
    }

    .mod-bg-4 {
      height: 560px;
      background: url(../assets/images/bg-home-4.jpg) no-repeat center;
    }

    .mod-bg-5 {
      height: 560px;
      background: url(../assets/images/bg-home-5.png) no-repeat center;
    }

    .mod-bg-6 {
      font-family: '微软雅黑 Oblique', '微软雅黑';
      font-style: oblique;
      font-size: 39px;
      color: #fff;
      text-align: center;
      height: 100px;
      line-height: 100px;
      background: url(../assets/images/bg-home-6.png) no-repeat center;
      background-size: auto 100px;
    }

    .mod-footer {
      height: 280px;
      background-color: #666;
      padding-top: 70px;
    }
  }
</style>
