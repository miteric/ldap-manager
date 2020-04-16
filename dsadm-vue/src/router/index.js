import Vue from "vue";
import VueRouter from "vue-router";
import ListEntity from "../views/ListEntity.vue";
import ViewEntity from "../views/ViewEntity.vue";
import ViewDetail from "../views/ViewDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "route.home",
    props: true,
    component: ListEntity
  },
  {
    path: "/view/:pid",
    props: true,
    component: ViewEntity,
    children: [
      {
        path: "",
        name: "route.view",
        props: true,
        component: ViewDetail
      },
      {
        path: ":sec",
        name: "route.info",
        props: true,
        component: ViewDetail
      }
    ],
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
    name: "route.edit",
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
    name: "route.new",
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
