import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CityView from "../views/CityView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },

    {
      name: "CityView",
      path: "/weather/:state/:city",
      component: CityView,
      meta: {
        title: "Weather",
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.state ? `${to.params.city},${to.params.state}`
      : to.meta.title
  } | The Local Weather`;
  next();
});
export default router;
