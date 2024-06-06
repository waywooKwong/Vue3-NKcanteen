<template>
  <div id="order">
    <div class="container">
      <div class="order-selection">
        <h2>学生食堂点餐</h2>
        <div class="window-selection">
          <label>选择窗口：</label>
          <select v-model="selectedWindow">
            <option v-for="(window, index) in windows" :value="window.win_id" :key="window.win_id">{{ window.win_id }}
            </option>
          </select>
        </div>

        <div class="menu-selection" v-if="selectedWindow">
          <h3>菜单</h3>
          <ul>
            <li v-for="(item, index) in menuItems" :key="index">
              <input type="checkbox" :id="'item-' + index" v-model="selectedItems" :value="item.name">
              <label :for="'item-' + index">
                <img :src="item.image" alt="" width="50">
                {{ item.name }} - ￥{{ item.price }}
              </label>
            </li>
          </ul>
          <button @click="confirmOrder">下单</button>
        </div>
      </div>

      <div class="order-details" v-if="orders.length > 0">
        <h3>订单详情</h3>
        <div v-for="(order, index) in orders" :key="index" class="order">
          <p>订单{{ index + 1 }}：</p>
          <ul>
            <li v-for="(item, i) in order.items" :key="i">{{ item.name }}</li>
          </ul>
          <p>窗口{{ order.window }} 排号：{{ order.queueNumber }}</p>
          <p>{{ order.status }}</p>
          <p v-if="order.countdown">{{ order.countdown }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      windows: [],
      selectedWindow: null,
      menuItems: [],
      selectedItems: [],
      orders: []
    };
  },
  created() {
    this.fetchWindowsAndMenu();
  },
  watch: {
    selectedWindow(newVal) {
      this.fetchMenuItems(newVal);
      this.selectedItems = []; // 清空已选择的菜品
    }
  },
  methods: {
    fetchWindowsAndMenu() {
      axios.get('http://localhost:3000/windows')
        .then(response => {
          this.windows = response.data;
        })
        .catch(error => {
          console.error('Error fetching windows:', error);
        });
    },
    fetchMenuItems(win_id) {
      axios.get('http://localhost:3000/menu_items')
        .then(response => {
          this.menuItems = response.data.filter(item => item.win_id === win_id);
        })
        .catch(error => {
          console.error('Error fetching menu items:', error);
        });
    },
    confirmOrder() {
      if (this.selectedItems.length === 0) {
        alert("请选择菜品！");
        return;
      }
      if (confirm("确认下单？")) {
        this.order();
      }
    },
    order() {
      const selectedWindow = this.windows.find(window => window.win_id === this.selectedWindow);
      const processingTime = 10 * this.selectedItems.length; // 假设每个菜品的处理时间为10秒
      const queueNumber = Math.floor(Math.random() * 100) + 1;

      const newOrder = {
        items: this.selectedItems.map(name => ({ name })),
        window: selectedWindow.name,
        queueNumber: queueNumber,
        estimatedTime: new Date(Date.now() + processingTime * 1000).toLocaleTimeString(),
        status: '等待取餐',
        countdown: this.formatCountdown(processingTime * 1000)
      };

      this.orders.push(newOrder);
      this.startCountdown(newOrder, processingTime * 1000);

      axios.post('http://localhost:3000/reserve', {
        window: this.selectedWindow,
        queueNumber: queueNumber,
        items: this.selectedItems
      })
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error('Error saving reservation:', error);
        });
    },
    startCountdown(order, processingTime) {
      const endTime = Date.now() + processingTime;

      order.timer = setInterval(() => {
        const remainingTime = Math.max(0, endTime - Date.now());
        order.countdown = this.formatCountdown(remainingTime);

        if (remainingTime === 0) {
          clearInterval(order.timer);
          order.status = '可取餐！';
        }
        this.$forceUpdate();
      }, 1000);
    },
    formatCountdown(time) {
      const minutes = Math.floor(time / (1000 * 60));
      const seconds = Math.floor((time / 1000) % 60);
      return `${minutes} 分 ${seconds} 秒`;
    }
  },
  beforeDestroy() {
    this.orders.forEach(order => {
      clearInterval(order.timer);
    });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
}

.order-selection,
.order-details {
  flex: 1;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.order-selection h2,
.menu-selection h3,
.order-details h3 {
  color: #333;
}

.window-selection,
.menu-selection,
.order-details {
  margin: 20px 0;
}

.window-selection label,
.menu-selection ul,
.order-details p {
  font-size: 16px;
  color: #555;
}

.menu-selection ul {
  list-style: none;
  padding: 0;
}

.menu-selection li {
  margin: 10px 0;
}

.menu-selection img {
  margin-right: 10px;
}

.order {
  margin-bottom: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}
</style>