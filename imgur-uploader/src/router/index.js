import Vue from "vue";
import VueRouter from "vue-router";
import AuthHandler from "../views/AuthHandler";
import ImageList from "../views/ImageList";
import UploadForm from "../views/UploadForm";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ImageList",
    component: ImageList,
  },
  {
    path: "/upload",
    name: "UploadForm",
    component: UploadForm,
  },
  {
    path: "/oauth2/callback",
    name: "AuthHandler",
    component: AuthHandler,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 모든 경로를 대상으로, 해당 경로로 보내기 전에 검증하는 Navigation Router
router.beforeEach((to, from, next) => {
  const authRequiredPages = ["UploadForm"];
  const authRequired = authRequiredPages.includes(to.name);

  const { isloggedIn } = store.getters;

  authRequired && !isloggedIn ? next("/") : next();
});

export default router;
