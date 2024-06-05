<template>
    <div class="product-detail">
      <div class="container">
        <div class="bread-container">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: `/category/${categoryId}` }">{{ categoryName }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ product.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="detail-content">
          <img :src="product.image" alt="菜品图片">
          <div class="details">
            <h2>{{ product.name }}</h2>
            <p>{{ product.price }} 元</p>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const categoryId = ref(route.params.id);
  const productId = ref(route.params.productId);
  const product = ref({
    name: '',
    price: 0,
    image: '',
    description: '这是一个菜品的详细描述'
  });
  const categoryName = ref('菜单');
  
  onMounted(() => {
    // 根据路由参数获取菜品详情
    // 假设你有一个方法 fetchProduct 来获取菜品信息
    const fetchProduct = (id) => {
      // 模拟数据
      return {
        name: '菜品名称',
        price: 20,
        image: 'https://via.placeholder.com/375',
        description: '这是一个菜品的详细描述'
      };
    };
  
    product.value = fetchProduct(productId.value);
  });
  </script>
  
  <style scoped lang="scss">
  .product-detail {
    .container {
      .bread-container {
        margin-bottom: 20px;
      }
      .detail-content {
        display: flex;
        gap: 20px;
        img {
          width: 375px;
          height: 375px;
          object-fit: contain;
        }
        .details {
          h2 {
            font-size: 24px;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            margin: 10px 0;
          }
        }
      }
    }
  }
  </style>
  