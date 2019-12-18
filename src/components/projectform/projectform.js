import Vue from 'vue';
import template from './projectForm.html'
import styles from './projectForm.less'
import projectDescription from '../projectDescription/projectDescription'
import marketDetails from '../marketDetails/marketDetails'

/* eslint-disable */

export default Vue.extend({
  template: template,
  components: {
    projectDescription,
    marketDetails
  },
  data: function () {
    return {
      chips:[],
      chipValue:'',
      currentTab: 2,
      showForm: false
    }
  },
  methods: {
    
    setTab(tabNumber){
        this.currentTab = tabNumber
    },
    nextTab(){
      this.currentTab += 1
    }
    
  },
  created: function () {
    
    

  }
});



