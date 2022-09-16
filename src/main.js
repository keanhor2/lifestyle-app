import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Card from '@/components/CardView.vue'
// bootstrap import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// font awesome import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const app=createApp(App).component("fa", FontAwesomeIcon)
app.component('card-view',Card)
app.use(router).mount('#app')



