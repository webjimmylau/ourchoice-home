<template>
  <div class="page-register">
    <mod-web-header />
    <div class="wrapper">
      <div class="mod-box">
        <div class="register-box">
          <div class="title">请使用手机号注册账号</div>
          <input class="item" type="text" placeholder="请输入手机号" />
          <div class="item">
            <input type="text" placeholder="请输入6位验证码" />
            <button type="button">获取手机验证码</button>
          </div>
          <input class="item" type="text" placeholder="6-20个字母和数字组合" />
          <input class="item" type="text" placeholder="请再次输入密码确认" />
          <p class="options">
            <label><input type="checkbox" />我已阅读并接受&ensp;</label>
            <a href="/">《纵购商城用户服务协议》</a>
          </p>
          <p class="error">手机号码已被注册</p>
          <button class="submit-button" type="button">同意并注册</button>
        </div>
      </div>
    </div>
    <mod-web-footer />
    <com-copyright />
  </div>
</template>

<script>
  import ModWebHeader from '@/components/mod-web-header'
  import ModWebFooter from '@/components/mod-web-footer'
  import ComCopyright from '@/components/com-copyright'

  export default {
    name: 'register',
    components: {
      ComCopyright,
      ModWebHeader,
      ModWebFooter
    },
    data() {
      return {}
    },
    beforeMount() {},
    methods: {}
  }
</script>

<style>
  .page-register {
    .wrapper {
      height: 520px;
      padding: 65px 0;
      background-color: #333;

      .mod-box {
        background: url(../assets/images/bg-register.png) no-repeat 90% center;
      }
    }

    .register-box {
      width: 332px;
      height: 390px;
      background-color: #fff;
      border-radius: 5px;
      margin-left: 45px;
      padding: 25px;

      .title {
        line-height: 36px;
        border-bottom: 1px solid #ccc;
      }

      .item {
        margin-top: 10px;
        width: 100%;

        button {
          border: none;
          background-color: #ccc;
          height: 38px;
          font-size: 12px;
          color: #666;
          margin-left: 10px;
          width: 110px;
          border-radius: 5px;
          cursor: pointer;
        }

        input {
          width: 162px;
        }
      }

      .options, .error {
        font-size: 12px;
        margin-top: 10px;
      }

      .error {
        color: #c81613;
      }

      .submit-button {
        height: 44px;
        background-color: #fabe00;
        border: none;
        width: 100%;
        border-radius: 5px;
        font-size: 16px;
        color: #fff;
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }
</style>
