import Vue from 'vue';
import App from './App.vue';
import Photo from './assets/classes/Photo';
import './assets/scss/style.scss';

Vue.config.productionTip = false;
//
var photo = new Photo(1,2,3,4);

new Vue({
    render: h => h(App)
}).$mount('#app');