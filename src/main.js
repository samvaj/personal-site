import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueRouter from 'vue-router'
import App from '@/App.vue';
import MainPage from '@/components/MainPage'

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MainPage },
  ]
})
  
Vue.use(VueRouter);

Vue.use(VueAnalytics, {
  id: 'UA-101333629-1',
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
