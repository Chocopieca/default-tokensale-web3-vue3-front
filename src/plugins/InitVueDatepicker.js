import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const InitVueDatepicker = {
  async install(vue) {
    vue.component("DatePicker", Datepicker);
  },
};

export default InitVueDatepicker;
