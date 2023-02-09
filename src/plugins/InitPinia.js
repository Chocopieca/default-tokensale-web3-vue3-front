import { createPinia } from "pinia";
import initServices from "@/plugins/InitServices";

const initPinia = {
  install(app) {
    const pinia = createPinia();
    pinia.use(initServices);
    app.use(pinia);
  },
};

export default initPinia;
