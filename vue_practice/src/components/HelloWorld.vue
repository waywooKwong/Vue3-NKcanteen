<script>
export default {
  data() {
    return {
      msg: "active",
      isButtonDisabled: false
    }
  }
}
</script>

<template>
  <div v-bind:id="msg">你好</div>
  <button :disabled="isButtonDisabled">测试</button>
  <div></div>
</template>

<style>
#active {
  color: red;
}
</style>
