<template>
<<<<<<< HEAD
  <div>
    <h2>已选择的预约</h2>
    <div v-for="reservation in reservations" :key="reservation.seat">
      <p>食堂: {{ reservation.canteen }}</p>
      <p>楼层: {{ reservation.floor }}</p>
      <p>座位: {{ reservation.seat }}</p>
      <p>预约时间: {{ reservation.time }} 分钟</p>
    </div>
    <router-link to="/">返回</router-link>
  </div>
</template>
  
=======
  <div class="text">
    <h2>已选择的预约</h2>
    <div v-for="reservation in reservations" :key="reservation.seat" class="reservation-box">
      <div class="reservation-content">
        食堂: {{ reservation.canteen }}<br>
        楼层: {{ reservation.floor }}<br>
        座位: {{ reservation.seatgroup + reservation.seatnumber }}<br>
        预约时间: {{ reservation.time }} 分钟
      </div>
    </div>
    <router-link to="/" class="text">返回</router-link>
  </div>
</template>

>>>>>>> main
<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      reservations: [] // 存储预约信息
    };
  },
  created() {
    // 从 URL 查询参数中获取预约信息，并解析为 JSON 格式
=======
      reservations: []
    };
  },
  created() {
>>>>>>> main
    this.reservations = JSON.parse(this.$route.query.reservations || '[]');
  }
};
</script>
<<<<<<< HEAD
  
<style scoped>
h2 {
  margin-bottom: 10px;
}

div {
  margin-bottom: 20px;
}
</style>
=======
<!-- 引入外部样式表 -->
<style scoped>
h2 {
  margin-bottom: 10px;
  text-align: center;
  
}

.reservation-box {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.reservation-content {
  width: 200px;
  height: 120px;
  /* 固定高度 */
  font-size: 16px;
  line-height: 1.2;
  overflow: hidden;
  /* 隐藏溢出内容 */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 10px;
  white-space: pre-wrap;
  /* 保留空白字符并换行 */
}
.text{
  text-align: center;
}
</style>
>>>>>>> main
