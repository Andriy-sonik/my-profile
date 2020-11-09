import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import locales from "./locales/";

Vue.use(VueI18n);
Vue.config.productionTip = false;
require("./assets/styles/index.scss");

const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en",
  messages: locales
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
