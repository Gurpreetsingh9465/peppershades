import Vue from 'vue';
import template from './projectForm.html'
import styles from './projectForm.less'
import projectDescription from '../projectDescription/projectDescription'
import marketDetails from '../marketDetails/marketDetails'
import services from '../../staticData/services.json'

/* eslint-disable */

export default Vue.extend({
  template: template,
  components: {
    projectDescription,
    marketDetails
  },
  data: function () {
    return {
      currentTab: 2,
      showForm: false,
      selectedServices: [{
        serviceName: '',
        currentStatus: 'Not Started',
        finalDesign: '',
        designImages: '',
        timeElapsed: 0,
        basePay: 0
      }]
    }
  },
  methods: {
    
    setTab(tabNumber){
        this.currentTab = tabNumber
    },
    nextTab(){
      this.currentTab += 1
    },
    categorize(category){
      this.services = this.services.filter( item => item.category === category)
    }
    
  },
  created: function () {
    
    

  },
  computed: {
    
    packages() {
      return services.packages.map((packs) => {
        return packs;
      });
    },
    services() {
      return services.services.map((services) => {
        return services;
      });
    }

  }
});



