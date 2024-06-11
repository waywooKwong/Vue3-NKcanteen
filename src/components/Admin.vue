<script setup>
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutFixed from '@/components/LayoutFixed.vue'
</script>

<template>
  <layout-fixed></layout-fixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView />
  <LayoutFooter></LayoutFooter>
</template>

<style scoped></style>
