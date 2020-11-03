import { createRouter, createWebHistory } from "vue-router";
import Calendar from "../components/Calendar.vue";
import Heroes from "../components/DotaHeroList.vue";
import HomePage from "../components/HomePage.vue";

const routes = [
  {
    path: "/",   
    component: HomePage
  },
  {
    path: "/Calendar",   
    component: Calendar
  },
  {
    path: "/Heroes",  
    component: Heroes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;