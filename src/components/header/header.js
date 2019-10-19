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
      logo: 'logo'
    }
  },
  methods: {},
  created: function () {
  }
});
