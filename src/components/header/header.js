/* eslint-disable */

import Vue from 'vue';
import template from './header.html'
import styles from './header.less'
import projectForm from '../projectform/projectform'

export default Vue.extend({
  components: {
    'projectForm': projectForm
  },
  template: template,
  data: function () {
    return {
      logo: 'logo',
      open: false
    }
  },
  methods: {
    openit(){
      this.open = true
    },
    close(){
      this.open = false
    }
  },
  created: function () {
  }
});
