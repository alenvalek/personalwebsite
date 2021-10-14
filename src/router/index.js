import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Repos from '../views/Repos.vue';
import Projects from '../views/Projects.vue';
import NotFound from '../views/NotFound.vue';
import ContactMe from '../views/ContactMe.vue';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/repos',
      name: 'Repos',
      component: Repos,
   },
   {
      path: '/projects',
      name: 'Projects',
      component: Projects,
   },
   {
      path: '/contact',
      name: 'ContactMe',
      component: ContactMe,
   },
   {
      path: '/:catchAll(.*)',
      component: NotFound,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
