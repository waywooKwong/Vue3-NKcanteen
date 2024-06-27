<script setup>
// 分类数据，包含 ID 和名称
const categories = [
  { id: 1, name: '菜单' },
  { id: 2, name: '活动' },
  { id: 3, name: '排队' },
];
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">旺旺商城</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>

        <li v-for="category in categories" :key="category.id">
          <RouterLink :to="`/category/${category.id}`">{{ category.name }}</RouterLink>
        </li>

      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->

    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 110px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/下载.jpg') no-repeat center 18px / contain;
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

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
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