/* eslint-disable */

import Vue from 'vue'
import template from './dashboard.html'
import styles from './dashboard.less'
import axios from 'axios'

export default Vue.extend({
  template: template,
  data() {
    return {
      value: 45,
      max: 100,
      widthvalue:'40%',
      activeColor:'red',
      user: '',
      log: true
    }
  },
  methods: {
        getUser(){
            const response = axios.get('http://localhost:3000/user/currentuser')
            alert(response)
        }
    },
  created(){
    this.getUser()
  }
});