import Vue from 'vue';
import Router from './router';
import Root from './components/root/root';
import headerElement from './components/header/header';

window.idpApp = new Vue({
  el: '#app',
  router: Router,
  components: {
    'root': Root,
    'headerElement': headerElement
  },
  methods: { },
  mounted () {
    console.log('hi vue ');
  }
});
