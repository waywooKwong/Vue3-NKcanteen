<template>
  <div id="app">
    <Order /> <!-- 引入 Order 组件 -->
  </div>
</template>

<script>
import Order from './components/Order.vue'; // 引入 Order.vue 组件

export default {
  components: {
    Order // 注册 Order 组件
  }
};
</script>

<style>
/* 样式可以根据需要自行调整 */
#app {
  text-align: center;
  padding: 20px;
}
</style>
