import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router.config';

import 'normalize.css';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
  to.matched.some(record => {
    if (record.meta.title) document.title = `${record.meta.title} - MSTC`;
  });

  next();
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});