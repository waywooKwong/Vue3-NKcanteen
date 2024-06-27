<script setup>
import LayoutNav from '@/components/adminComponets/LayoutNav.vue'
import LayoutHeader from '@/components/adminComponets/LayoutHeader.vue'
import LayoutFooter from '@/components/adminComponets/LayoutFooter.vue'
import LayoutFixed from '@/components/adminComponets/LayoutFixed.vue'
</script>

<template>
  <layout-fixed></layout-fixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <div class="spacer"></div>
  <RouterView />
  <LayoutFooter></LayoutFooter>
</template>

<style scoped>
.spacer {
  height: 20px;
  background-color: #f8f8f8;
}
</style>
