<template>
    <!-- We are binding a class 'is-completed' to the property "todo.completed" (if it's true the class will be asigned) -->
    <div> <!-- v-bind:class="{'is-completed': todo.completed}" -->
        <img class="photo image-hover img-zoom-in" :src="photo.url">
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
        height: 100%;
        width: 100%;
    }
</style>