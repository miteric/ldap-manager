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

import VeeValidate from "vee-validate";
import zh_TW from "vee-validate/dist/locale/zh_TW";
VeeValidate.Validator.localize("zh_TW", zh_TW);
Vue.use(VeeValidate);

import flatPickr from "vue-flatpickr-component";
Vue.use(flatPickr);

import AppAPI from "./mixins/api";
Vue.mixin(AppAPI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
