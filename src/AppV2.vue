<template>
  <div id="app">
    <Header />
    <p>LOAD IMAGES FROM API</p>
    <Photos v-bind:photos="photos" />
  </div>
</template>
<script>
import Header from "./components/layouts/Header.vue";
import Photos from "./components/Photos.vue";
//import Observer from "./components/Observer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Photos//,
    //Observer
  },
  data() {
    return {
      photos: [],
      load: [],
      page: 1
    };
  },
  mounted() {
    this.getContentFromApi();
  },
  methods: {
    updateScrollEvent() {
      var updated = false;

      window.onscroll = ev => {
        var userPosition = window.innerHeight + window.scrollY;
        var height = document.body.offsetHeight;

        if (!updated && userPosition >= height) {
          updated = true;
          this.getContentFromApi();
        }
      };
    },

    getContentFromApi() {
      console.log("Getting Content From API...");
      //document.write(content);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=5&_page=${this.page++}`
        )
        .then(res => {
          this.photos = [...this.photos, ...res.data];
          res.data.forEach(item => {
            var img = new Image();
            img.src = item.url;
            img.onload = () => {
              this.load.push(img.src);
              if (this.load.length == this.photos.length) {
                this.updateScrollEvent();
              }
            };
          });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style>
</style>