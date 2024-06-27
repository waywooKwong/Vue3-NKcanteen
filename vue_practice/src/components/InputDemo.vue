<template>
    <h3>表单输入绑定</h3>
    <input type="text" v-model.lazy="msg" placeholder="在这里输入">
    <input type="checkbox" id="checkbox" v-model="checkData">
    <label for="checkbox">在此选择</label>
    <p>{{ msg }}</p>
</template>

<script>
export default {
    data() {
        return {
            msg: '',
            checkData: true

        }
    }
}
</script>