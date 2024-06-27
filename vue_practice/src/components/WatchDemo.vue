<template>
    <h3>侦听器</h3>
    <p>{{ message }}</p>
    <p>{{ oldMessage }}</p>
    <p>{{ newMessage }}</p>
    <button @click="alterMessage">点击更改数据</button>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue.js!',
            newMessage: '123',
            oldMessage: '456',
        }
    },
    methods: {
        alterMessage() {
            this.message = 'Goodbye Vue.js!'
        }
    },
    // 侦听器
    watch: {
        // 侦听器函数名必须与侦听的数据对象保持一致
        message: function (newVal, oldVal) {
            // 数据发生变化执行的函数
            this.oldMessage = oldVal
            this.newMessage = newVal
            console.log('newVal:' + newVal + ', oldVal:' + oldVal)
        }
    }
}
</script>