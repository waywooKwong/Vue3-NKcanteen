<template>
    <h3>数组监听变化</h3>
    <button @click="addList">添加数据</button>
    <input :type="text" :placeholder="inputCapture">
    <ul>
        <li v-for="(item, index) in names" :key="index">{{ item }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            names: ["jack", "peter", "frank"],
            name: "",
            count: 0,

            text: "text",
            inputCapture: "请在这里输入"
        }
    },

    methods: {
        addList() {
            this.names.push("Sakura")
            console.log(this.names)
        }
    }
}
</script>