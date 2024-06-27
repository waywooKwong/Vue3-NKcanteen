<template>
    <h3>class绑定</h3>
    <p :class="myClass">class样式绑定</p>
</template>


<script>
export default {
    data() {
        return {
            myClass: "demo"
        }
    }
} 
</script>