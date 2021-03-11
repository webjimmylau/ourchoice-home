<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
[class^="icon-"], [class*=" icon-"] {
  line-height: inherit;
  font-size: 16px;
  text-align: center;
  vertical-align: top;
  display: inline-block;
}

#app, textarea, input {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "SF UI Text", "Helvetica Neue", Arial, "WenQuanYi Zen Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}

html {
  height: 100%;
  color: #555;
  background-color: #f6f8f9;
  font-size: 14px;
}

body {
  margin: 0;

  &.full-screen {
    height: 100%;

    #app {
      height: 100%;
    }
  }
}

div, p, span, strong, a, ul, ol, li, i, img, h2, h3, h4, h5, form, input, textarea {
  box-sizing: content-box;
  padding: 0;
  margin: 0;
}

ul, ol, li {
  list-style: none;
}

* {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
  vertical-align: top;
}

a {
  text-decoration: none;
  color: #666;
}

.mod-box {
  width: 1200px;
  margin: 0 auto;
}

.fix {
  zoom: 1;

  &:after {
    display: block;
    content: '';
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
}

.fl-l { float: left; }

.fl-r { float: right; }

.flex {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;

  .cell {
    -webkit-box-flex: 1;
    flex: 1;
    display: block;
    max-width: 100%;
    flex-basis: 0;
    min-width: 0; /* 必须加上min-width:0; 不然cell里如果使用了elis，则会溢出 */
  }

  &.column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  &.item-c {
    -webkit-box-align: center;
    align-items: center;
  }

  &.jcc {
    -webkit-box-pack: center;
    justify-content: center;
  }

  &.jcsb {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
}

.elis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 多行省略号 */
.multi-elis {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
}

.v-middle {
  text-align: center;

  .v-middle-content {
    display: inline-block;
    vertical-align: middle;
  }

  &:after {
    content: '';
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
