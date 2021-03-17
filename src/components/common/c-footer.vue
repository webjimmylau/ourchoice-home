<template>
  <div :class="$utils.addClass('c-footer', { dark })" :style="addStyle">
    <div class="wrap">
      <router-link to="/">首页</router-link><i></i>
      <router-link to="/">诚聘英才</router-link><i></i>
      <router-link to="/">合作及洽谈</router-link><i></i>
      <router-link to="/">联系我们</router-link><i></i>
      <router-link to="/">关于我们</router-link>
      <p>Copyright © 2019-2020 ourchoice.cn, All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: String,
      default: "20px 0",
    },
  },
  computed: {
    addStyle() {
      return `padding: ${this.padding};`;
    },
  },
};
</script>

<style>
.c-footer {
  text-align: center;
  &.light {
    background: #eee;
  }
  &.dark {
    color: #ccc;
    background: #333;
    a {
      color: #ccc;
    }
  }
  i::before {
    margin: 0 5px;
    color: #ccc;
    content: "|";
  }
  p {
    margin-top: 10px;
  }
}
</style>