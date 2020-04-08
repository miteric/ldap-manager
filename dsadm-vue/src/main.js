import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Lang from "vue-lang";
const locales = {
  en: require("./lang/en.js"),
  zh_TW: require("./lang/zh.js")
};
Vue.use(Lang, {
  lang: "zh_TW",
  locales: locales
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
