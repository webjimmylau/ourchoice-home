<template>
  <div class="com-copyright">
    <div class="mod-box">
      <div class="menu">
        <a class="item" href="/">首页&emsp;|&emsp;</a>
        <a class="item" href="javascript:void(0)">诚聘英才&emsp;|&emsp;</a>
        <a class="item" href="javascript:void(0)">合作及洽谈&emsp;|&emsp;</a>
        <a class="item" href="javascript:void(0)">联系我们&emsp;|&emsp;</a>
        <a class="item" href="javascript:void(0)">关于我们</a>
      </div>
      <p>Copyright © 2019-2020 ourchoice.cn, All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'com-copyright'
}
</script>

<style>
  .com-copyright {
    color: #999;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    background-color: #ecfafb;

    .mod-box {
      border-top: 1px solid #ccc;
      width: 1180px;
      padding: 30px;
    }

    .menu {
      .item {
        display: inline-block;
        color: #999;
      }
    }
  }
</style>
