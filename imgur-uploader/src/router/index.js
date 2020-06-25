import Vue from "vue";
import VueRouter from "vue-router";
import AuthHandler from "../views/AuthHandler";
import ImageList from "../views/ImageList";
import UploadForm from "../views/UploadForm";

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

export default router;
