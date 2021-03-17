<template>
  <div :class="$utils.addClass('page-bg-2', { show })">
    <template v-if="show">
      <p>"零售"+"分销" 双模式驱动店铺业绩爆发式增长</p>
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
.page-bg-2 {
  height: 360px;
  background: #fdf9f8 url("~@/assets/images/bg-home-2.png") center no-repeat;
  &.show {
    height: 560px;
    padding-top: 60px;
    background-position: center 80%;
    p {
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>