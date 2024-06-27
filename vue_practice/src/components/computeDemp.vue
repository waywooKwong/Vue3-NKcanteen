<template>
    <h3>计算属性</h3>
    <p>{{ computedData }}</p>
</template>

<script>
export default {
    data() {
        return {
            objectData: {
                name: "jack",
                content: ["html", "css", "js"]
            }
        }
    },

    //计算属性
    computed: {
        computedData() {
            return this.objectData.content.length > 0 ? 'yes' : 'no'
        }
    }
}
</script>