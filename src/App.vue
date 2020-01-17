<template>
    <div id="app">
        <Header/>
        <p>LOAD IMAGES FROM API</p>
        <Photos v-bind:photos="photos" />
    </div>
</template>
<script>

import Header from './components/layouts/Header.vue';
import Photos from './components/Photos.vue';
import axios from 'axios';

export default {
    name: 'app',
    components: {
        Header,
        Photos
    },
    data(){
        return{
            photos: []
        }
    },
    methods: {
        
    },
    //This is called once all the app is created
    created(){
           axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(res => this.photos = res.data)
            .catch(err => console.log(err));
    }
}
</script>
<style>

</style>