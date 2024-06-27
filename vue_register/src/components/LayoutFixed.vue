<script setup>
import { useScroll } from '@vueuse/core';

const { y } = useScroll(window);

// 分类数据，包含 ID 和名称
const categories = [
  { id: 1, name: '菜单' },
  { id: 2, name: '活动' },
  { id: 3, name: '排队' },
];

</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li v-for="category in categories" :key="category.id">
          <RouterLink :to="`/category/${category.id}`">{{ category.name }}</RouterLink>
        </li>

      </ul>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/下载.jpg") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}

// 重置样式
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-size: 14px;
}

body {
  height: 100%;
  color: #333;
  min-width: 1240px;
  font: 1em/1.4 'Microsoft Yahei', 'PingFang SC', 'Avenir', 'Segoe UI',
    'Hiragino Sans GB', 'STHeiti', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei',
    sans-serif;
}

body,
ul,
h1,
h3,
h4,
p,
dl,
dd {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #333;
  outline: none;
}

i {
  font-style: normal;
}

input[type='text'],
input[type='search'],
input[type='password'],
input[type='checkbox'] {
  padding: 0;
  outline: none;
  border: none;
  -webkit-appearance: none;

  &::placeholder {
    color: #ccc;
  }
}

img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  background: #ebebeb url('@/assets/images/200.png') no-repeat center / contain;
}

ul {
  list-style: none;
}

#app {
  background: #f5f5f5;
  user-select: none;
}

.container {
  width: 1240px;
  margin: 0 auto;
  position: relative;
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.ellipsis-2 {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix:after {
  content: '.';
  display: block;
  visibility: hidden;
  height: 0;
  line-height: 0;
  clear: both;
}

// reset element
.el-breadcrumb__inner.is-link {
  font-weight: 400 !important;
}
</style>