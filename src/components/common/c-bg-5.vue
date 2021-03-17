<template>
  <div :class="$utils.addClass('page-bg-5', { show })">
    <template v-if="show">
      <img src="@/assets/images/logo.png" />
      <p>五金建材行业的生意好伙伴</p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.page-bg-5 {
  height: 360px;
  background: #ecfafb url("~@/assets/images/bg-home-5.png") center no-repeat;
  &.show {
    height: 560px;
    padding-top: 60px;
    background-position: center 80%;
    img {
      display: block;
      width: 140px;
      margin: 0 auto;
    }
    p {
      padding-top: 20px;
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>