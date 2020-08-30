import Vue form 'vue';

import VueRouter form 'vue-router';

Vue.use(VueRouter);

import Home form '../component/Home.vue'

const routes = new VueRouter({
    mode: 'history',
    routes:[
      {
        path: '/',
        component: Home,
      }
    ]
})

export default routes;
