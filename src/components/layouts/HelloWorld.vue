<template>
    <div>
        <span>{{ msg }}</span>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>
<!-- SCOPED means that this style can be used in this component only -->
<style scoped>

</style>