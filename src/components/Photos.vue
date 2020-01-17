<template>
    <div>
        <div v-bind:key="photo.id" v-for="photo in photos" class="photo-item">
            <PhotoItem v-bind:photo="photo"/> <!--  v-bind:todo="todo" [El último todo es el item del for] -->
        </div>
    </div>
</template>

<script>
import PhotoItem from './PhotoItem.vue';

export default {
    name: "Photos",
    components: {
        PhotoItem
    },
    props: ["photos"] //it's the property from App.vue i think
}
</script>

<style scoped>
    .photo-item{
        display: inline-block;
        width: 33%;
        /*border: 5px solid whitesmoke;*/
    }
</style>