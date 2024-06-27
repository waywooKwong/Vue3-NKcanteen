<template>
    <h3>{{ msg }}</h3>
    <button @click="count += count">点击增加count值</button>
    <button @click="addCount">点击增加count值2</button>
    <button :="objectButton" @click="zeroCount">点击归零count值</button>
    <p>{{ count }}</p>
</template>

<script>
export default {
    data() {
        return {
            msg: "vue中的DOM操作",
            count: 0,

            objectButton: {
                class: "buttonClass",
            }
        }
    },

    methods: {
        addCount() {
            this.count += 1
        },

        zeroCount() {
            this.count = 0
        }
    }
}
</script>