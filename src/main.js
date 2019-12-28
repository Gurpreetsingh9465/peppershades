import Vue from 'vue';
import Router from './router';
import Root from './components/root/root';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import VueResource from 'vue-resource';
import axios from 'axios'

Vue.use(VueResource);
Vue.config.productionTip = false;

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

// Vue.http.interceptors.push(function(request) {
//   request.credentials = true
//   return function(response) {
//   };
// });

// axios.defaults.withCredentials = true
// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

window.idpApp = new Vue({
  el: '#app',
  router: Router,
  components: {
    'root': Root
  },
  methods: { }
  
});
