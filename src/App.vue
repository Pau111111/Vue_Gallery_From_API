<template>
    <div id="app">
        <Header/>
        <p>LOAD IMAGES FROM API</p>
        <Photos v-bind:photos="photos"/>
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
    //This is called once all the app is created
    created(){
        console.log("created()");
           axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(res => this.photos = res.data, this.addPhotos())
            .catch(err => console.log(err));
            //console.log(this.photos);
    },
    mounted (){
        //this.addPhotos();
    },
    methods: {
        addPhotos(){
            console.log("addPhotos()");
            var resulttt = "";
            //vue SET

            setTimeout(function(){
                console.log("timeout");
                axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
                .then(res => this.photos = [...this.photos, res.data] ) //this.photos = [...this.photos, res.data]
                .catch(err => console.log(err));
            }, 5000);
            
            //console.log(this.photos);
            //Vue.set(vm.someObject, 'b', 2)
            //this.$set(this.photos, 'b', 2);
            console.log("sddsa" + resulttt);

            window.onscroll = () => {
                //let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
                //console.log(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop, window.innerHeight, document.documentElement.offsetHeight, bottomOfWindow );
                
                var D = document;
                var bottomOfWindow = Math.max(
                D.body.scrollHeight, D.documentElement.scrollHeight,
                D.body.offsetHeight, D.documentElement.offsetHeight,
                D.body.clientHeight, D.documentElement.clientHeight);
            
                /*var element = event.target;
                if (element.scrollHeight - element.scrollTop === element.clientHeight)
                {
                    console.log('scrolled');
                }*/

               // console.log(bottomOfWindow);
                //console.log($(document).height()); 

                if (bottomOfWindow) {
                    console.log("Reached the bottom");
                }
            }
        }
    },
}
</script>
<style>

</style>