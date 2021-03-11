<template>
  <div class="c-copyright">
    <div class="menu">
      <router-link class="item" to="/">首页&emsp;|&emsp;</router-link>
      <router-link class="item" to="/">诚聘英才&emsp;|&emsp;</router-link>
      <router-link class="item" to="/">合作及洽谈&emsp;|&emsp;</router-link>
      <router-link class="item" to="/">联系我们&emsp;|&emsp;</router-link>
      <router-link class="item" to="/">关于我们</router-link>
    </div>
    <p>Copyright © 2019-2020 ourchoice.cn, All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'copyright'
}
</script>

<style>
  .c-copyright {
    color: #fff;
    text-align: center;
    line-height: 28px;
    font-size: 12px;

    .menu {
      .item {
        display: inline-block;
        color: #fff;
      }
    }
  }
</style>
