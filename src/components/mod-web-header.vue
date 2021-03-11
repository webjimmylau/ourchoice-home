<template>
  <div class="mod-web-header">
    <div class="mod-header">
      <div class="mod-box fix">
        <img class="logo" src="../assets/images/logo.png" />
        <h4 class="title">卖家注册</h4>
        <p class="status">我已经注册，现在去&ensp;<a href="/login">登 录</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mod-web-header'
}
</script>

<style>
  .mod-web-header {
    background-color: #fabe00;
    height: 88px;
    padding-top: 12px;

    .logo {
      float: left;
      width: 130px;
    }

    .title {
      font-size: 18px;
      font-weight: normal;
      float: left;
      margin: 8px 0 0 25px;
      padding: 11px 0 11px 25px;
      line-height: 24px;
      border-left: 1px solid #666;
    }

    .status {
      float: right;
      line-height: 40px;
      margin-top: 36px;
      
      a {
        font-weight: bold;
      }
    }
  }
</style>
