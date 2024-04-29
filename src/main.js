import { createApp } from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';
import './assets/global.css';


const app = createApp(App);

app.use(VueLazyload, {
    // Options go here
    loading: require('@/images/loading.gif'),
    error: 'path/to/error/image.png',
});

app.mount('#app');
