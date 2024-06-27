<template>
    <h3>style样式</h3>
    <p :style="{ color: activeColor }">你好</p>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello Vue.js!',
            activeColor: "green"
        }
    }
}
</script>