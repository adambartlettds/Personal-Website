import { createApp } from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

app.use(VueLazyload, {
    // Options go here
    loading: require('@/images/loading.gif'),
    error: 'path/to/error/image.png',
});

app.mount('#app');
