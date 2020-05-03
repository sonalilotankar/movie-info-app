import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import { store } from "./store";
import router from "./router";
import axios from "axios";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
axios.defaults.baseURL =
  "http://www.omdbapi.com/?apikey=e0620bd4&page=1&type=movie&Content-Type=application/json";
new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount("#app");
