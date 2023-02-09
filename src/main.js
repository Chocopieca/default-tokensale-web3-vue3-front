import { createApp } from 'vue'

import App from "./App.vue";
import router from "@/router/index";
import initBaseScripts from "@/plugins/InitBaseScripts";
import initPinia from "@/plugins/InitPinia";
import initInjectedComponents from "@/plugins/initInjectedComponents";
import InitVueDatepicker from "@/plugins/InitVueDatepicker";

import "@/assets/main.scss";

const app = createApp(App);

app.use(router);
app.use(initPinia);
app.use(initBaseScripts);
app.use(initInjectedComponents);
app.use(InitVueDatepicker);

app.mount("#app");
