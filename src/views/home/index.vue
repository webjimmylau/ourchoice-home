<template>
  <div class="page">
    <c-header />
    <div class="page-bg-1"></div>
    <c-bg-2 show />
    <div class="page-bg-3"></div>
    <div class="page-bg-4"></div>
    <c-bg-5 show />
    <c-bg-6 show />
    <c-footer dark />
  </div>
</template>

<script>
export default {};
</script>

<style>
.page {
  .page-bg-1 {
    height: 480px;
    background: url("~@/assets/images/bg-home-1.png") center no-repeat;
  }
  .page-bg-3 {
    height: 600px;
    background: url("~@/assets/images/bg-home-3.png") center no-repeat;
  }
  .page-bg-4 {
    height: 560px;
    background: url("~@/assets/images/bg-home-4.png") center no-repeat;
  }
}
</style>
