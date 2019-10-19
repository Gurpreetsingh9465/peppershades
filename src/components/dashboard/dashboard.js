/* eslint-disable */

import Vue from 'vue';
import template from './dashboard.html'
import styles from './dashboard.less'

export default Vue.extend({
  template: template,
  data() {
    return {
      value: 45,
      max: 100,
      widthvalue:'40%',
      activeColor:'red'
    }
  },
  methods: {
    randomValue() {
      this.value = Math.random() * this.max
    }
  }
});