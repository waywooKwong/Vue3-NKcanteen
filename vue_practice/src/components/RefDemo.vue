<template>
    <div ref="container" class="container">容器</div>
    <button @click="getElement">获取元素</button>
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello'
        }
    },
    methods: {
        getElement() {
            this.$refs.container.innerHTML = "hello world";

        }
    }
}
</script>