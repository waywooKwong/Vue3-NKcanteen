<template>
    <h3>事件传参</h3>
    <p @click="getName(item, count, $event)" v-for="(item, index) in names" :key="index">{{ item }} : {{ index }}</p>
    <p>你点击了{{ name }}的名字</p>
    <p>你总共点击了{{ count }}次</p>
</template>

<script>
export default {
    data() {
        return {
            names: ["jack", "peter", "frank"],
            name: "",
            count: 0
        }
    },

    methods: {
        getName(itemName, clickCount, event) {
            this.name = itemName
            this.count = clickCount + 1
            console.log(event.target)
        }
    }
}
</script>