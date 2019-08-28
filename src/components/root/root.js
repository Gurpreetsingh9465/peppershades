/* eslint-disable no-undef */

import Vue from 'vue';
import template from './root.html'
import styles from './style.less'
import headerElement from '../header/header'


export default Vue.extend({
  components: {
    'headerElement': headerElement
  },
  template: template,
  data: function () {
    return {
    }
  },
  methods: {

  },
  created: function () {
  }
});
