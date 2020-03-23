import Vue from "vue";
import Page1 from "./Page1.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Page1)
}).$mount("#app");
