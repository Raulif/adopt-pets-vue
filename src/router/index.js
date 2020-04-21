import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cats from '../views/Cats';
import Dogs from '../views/Dogs';
import Pet from '../views/Pet';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: Dogs
  },
  {
    path: '/pets/:species/:id',
    name: 'pet',
    component: Pet,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
