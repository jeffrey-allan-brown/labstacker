import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

// initialize application //
const app = createApp(App);

// declare the store and router //
app.use(store);
app.use(router);

// main mount //
app.mount('#app');