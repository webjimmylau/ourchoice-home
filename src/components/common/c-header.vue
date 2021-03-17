<template>
  <div class="c-header">
    <div class="wrap clear">
      <router-link to="/" class="logo f-l"></router-link>
      <div class="user f-l">
        欢迎来到纵购！请
        <router-link to="/">[ 登 录 ]</router-link>
        <router-link to="/">[ 免费注册 ]</router-link>
      </div>
      <div class="menu f-r">
        <a
          href="javascript:;"
          class="icon-about"
          @mouseover="isShowAboutMoew = true"
          @mouseleave="isShowAboutMoew = false"
          >关于纵购
          <div class="about-more" v-show="isShowAboutMoew">
            <router-link to="/">关于纵购</router-link>
            <router-link to="/">企业历程</router-link>
            <router-link to="/">企业文化</router-link>
            <router-link to="/">企业动态</router-link>
            <router-link to="/">合作伙伴</router-link>
            <router-link to="/">联系我们</router-link>
          </div>
        </a>
        <router-link to="/" class="icon-shop">我的店铺</router-link>
        <router-link to="/" class="icon-card">销售中心</router-link>
        <router-link to="/" class="icon-stock">库存管理</router-link>
        <router-link to="/" class="icon-next">我要入驻</router-link>
        <router-link to="/" class="icon-phone">400-930-2128</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowAboutMoew: false,
    };
  },
};
</script>

<style>
.c-header {
  height: 92px;
  background-color: #fabe00;
  border-bottom: 4px solid #555;
  .m-t-46 {
    margin-top: 46px;
  }
  .logo {
    width: 140px;
    height: 67px;
    margin: 10px 10px 0 0;
    background: url(~@/assets/images/logo.png) no-repeat;
  }
  .user,
  .menu {
    margin-top: 56px;
    line-height: 32px;
    > a {
      position: relative;
      display: inline-block;
      margin-left: 15px;
      line-height: 32px;
      &:hover {
        color: #fff;
      }
    }
  }
  .menu > a {
    &::before {
      margin-right: 5px;
    }
  }
  .about-more {
    position: absolute;
    top: 100%;
    left: 0;
    width: 90px;
    background: #fff;
    text-align: center;
    a ~ a {
      border-top: 1px solid #ddd;
    }
    a {
      display: block;
      &:hover {
        color: #fabe00;
      }
    }
  }
}
</style>