import Vue from "vue";
import VueRouter from "vue-router";
import ListEntity from "../views/ListEntity.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: ListEntity
  },
  {
    path: "/view/:pid",
    name: "ViewEntity",
    props: true,
    component: () =>
      import(/* webpackChunkName: "ViewEntity" */ "../views/ViewEntity.vue"),
    beforeEnter: (to, from, next) => {
      // eslint-disable-next-line no-undef
      const exists = MEApp.datalist.find(
        entity => entity.pid === to.params.pid
      );
      if (exists) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    }
  },
  {
    path: "/edit/:pid",
    name: "EditEntity",
    props: true,
    component: () =>
      import(/* webpackChunkName: "EditEntity" */ "../views/EditEntity.vue"),
    beforeEnter: (to, from, next) => {
      // eslint-disable-next-line no-undef
      const exists = MEApp.datalist.find(
        entity => entity.pid === to.params.pid
      );
      if (exists) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    }
  },
  {
    path: "/new",
    name: "NewEntity",
    props: true,
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
