import Vue from "vue";
import VueRouter from "vue-router";
import ListEntity from "../views/ListEntity.vue";
import EditEntity from "../views/EditEntity.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ListEntity
  },
  {
    path: "/view/:pid",
    name: "ViewEntity",
    props: true,
    component: () =>
      import(/* webpackChunkName: "ViewEntity" */ "../views/ViewEntity.vue")
  },
  {
    path: "/edit/:pid",
    name: "EditEntity",
    props: true,
    component: EditEntity
  },
  {
    path: "/new",
    name: "NewEntity",
    component: () =>
      import(/* webpackChunkName: "NewEntity" */ "../views/NewEntity.vue")
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    const position = {};
    if (to.hash) {
      position.selector = to.hash;
      if (document.querySelector(to.hash)) {
        return position;
      }
    }
    return false;
  }
});

export default router;
