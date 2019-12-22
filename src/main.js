import Vue from 'vue';
import Router from './router';
import Root from './components/root/root';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

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
