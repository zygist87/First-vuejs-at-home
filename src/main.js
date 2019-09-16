import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.config.productionTip = false

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
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});

//Here i will create new filter for tutorial 35 whitch i named shorter
Vue.filter('shorter', function (value) {
  return value.slice(0, 100) + "..."
})

new Vue({
  render: h => h(App)
}).$mount('#app')
