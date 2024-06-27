<template>
    <h3 :="objectInfo">条件渲染</h3>
    <button :="objectButton">测试点击</button>
    <a :="objectHtml">测试网站点击</a>
</template>
<script>

export default {
    data() {
        return {
            ifShow: true,
            buttonId: "btn",
            isButtonDisabled: true,

            objectInfo: {
                id: "active1",

            },

            objectButton: {
                id: "active2",
                disabled: true,
            },

            objectHtml: {
                id: "active3",
                href: "http://www.baidu.com",
            }
        }
    }
}
</script>

<style>
#active3:hover {
    color: aqua;
}
</style>