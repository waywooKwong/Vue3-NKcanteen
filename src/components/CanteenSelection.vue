<template>
<<<<<<< HEAD
  <div>
    <h2>选择食堂</h2>
    <div v-for="canteen in canteens" :key="canteen" class="canteen-item">
      <div class="canteen-content">
        <!-- 图片路径设置要准确！！ -->
        <img :src="`src/assets/images/canteen/${canteen}.jpg`" alt="加载中">
        <button @click="selectCanteen(canteen)">
          {{ canteen }}
        </button>
      </div>
    </div>
=======
  <div id="backbody">
    <div class="scroll-banner">
      <div class="scroll-content">
        欢迎来到NKcanteen！最新消息：食堂将于6月10日举行端午节特别活动，敬请期待！
      </div>
    </div>
    <h1>NKcanteen</h1>
    <h2>选择食堂</h2>
    <div class="container">
      <div v-for="canteen in canteens" :key="canteen" class="canteen-item">
        <div class="canteen-content">
          <!-- 图片路径设置要准确！！ -->
          <img :src="`src/assets/images/canteen/${canteen}.jpg`" alt="加载中"> 
          <button @click="selectCanteen(canteen)">
            {{ canteen }}
          </button>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>食堂负责人：大厨小组</p>
      <p>联系方式: 123-456-7890</p>
      <p>地址: 天津市津南区同砚路38号</p>
    </div>
>>>>>>> main
  </div>
</template>

<script>
export default {
  data() {
    return {
      canteens: ['食堂A', '食堂B', '食堂C'],
    };
  },
  methods: {
    selectCanteen(canteen) {
      this.$router.push({ path: '/floor', query: { canteen } });
    }
  }
};
</script>

<<<<<<< HEAD
<style scoped>
h2 {
  margin-bottom: 10px;
}

.canteen-item {
  margin-bottom: 20px;
}

/* 图片和文本打包成容器，便于管理排版 */
.canteen-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  margin-bottom: 10px;
  width: 350px;
  height: 170px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
}
</style>
=======
<style src = "src/assets/seat.css"></style>
>>>>>>> main
