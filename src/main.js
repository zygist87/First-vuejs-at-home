import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

//Custom Directive for tutorial 34, cia sukursiu rainbow direktorija, kadangi ja sukursiu cia tai ja naudoti gales visi komponentai ir tai vadinama global, kaip ir auksciau importiniau vue resource

Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    // el.style.color = "red"
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px'
    }
  }
});

//Here i will create new filter for tutorial 35 whitch i named to-uppercase
//bet filter to-uppercase filtra pasirasiau lacally 37 componente, todel cia jo nebereikia, bet pasiliksiu kaip pavizdi
//bet paliksiu atkomentuota, nes tada reiktu ir 35 bei 36 komponentuose koda taisyti
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});

//Here i will create new filter for tutorial 35 whitch i named shorter
Vue.filter('shorter', function (value) {
  return value.slice(0, 100) + "..."
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
