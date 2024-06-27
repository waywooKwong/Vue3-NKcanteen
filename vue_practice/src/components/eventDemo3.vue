<template>
    <h3>事件修饰符</h3>
    <a @click.prevent="clickHandle" href="https://www.baidu.com">点击跳转百度</a>
    <div @click="clickDiv">
        <p @click.stop="clickP">
            点击测试
        </p>
    </div>
    <button @click.once="count++">点击{{ count }}次</button>
    <p>{{ count }}</p>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello Vue.js!',
            count: 0
        }
    },

    methods: {
        clickHandle(e) {
            // e.preventDefault();
            console.log("点击了");
        },

        clickDiv(e) {
            console.log("点击了div");
        },

        clickP(e) {
            // e.stopPropagation();
            console.log("点击了p");
        }

    }
}
</script>