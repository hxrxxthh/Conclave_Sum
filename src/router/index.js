// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
// App.vue will be redirected to linked components via <router-links>
// as a convention we will create new folder in 'src' named 'views' and place components to be linked in there
// components related to those links needs to be defined below both for import and routes[] array
import Home from "../views/Home.vue";
import ConclaveIntro from "../views/ConclaveIntro.vue";
import FullArticle from "../views/FullArticle.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import WideMode from "../views/WideMode.vue";
import UpdateDetails from "../views/UpdateDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "ConclaveIntro",
    component: ConclaveIntro,
  },
  {
    path: "/post",
    name: "FullArticle",
    component: FullArticle,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/update",
    name: "UpdateDetails",
    component: UpdateDetails,
  },
  {
    path: "/display",
    name: "WideMode",
    component: WideMode,
  }
];
// code below is NOT to be edited
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
