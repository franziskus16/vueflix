import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.ts";
import { FontAwesomeIcon } from "./plugins/fontawesome";
import "./assets/styles/_base.scss";
import { createPinia } from "pinia"; 

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());

app.mount('#app')

