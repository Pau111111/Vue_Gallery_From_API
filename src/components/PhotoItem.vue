<template>
    <!-- We are binding a class 'is-completed' to the property "todo.completed" (if it's true the class will be asigned) -->
    <div> <!-- v-bind:class="{'is-completed': todo.completed}" -->
        <img class="photo" :src="photo.url">
    </div>
</template>
<script>
export default {
    name: "PhotoItem",
    props: ["photo"],
    methods: {
        
    }
}
</script>
<style scoped>
    .photo{
        height: 90%;
        width: 90%;
        padding: 10px 10px 10px 10px;
    }
</style>