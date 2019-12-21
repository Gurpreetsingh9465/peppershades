import Vue from 'vue';
import template from './projectForm.html'
import styles from './projectForm.less'
import projectDescription from '../projectDescription/projectDescription'
import marketDetails from '../marketDetails/marketDetails'
import services from '../../staticData/services.json'
import service from '../UI/service.vue'
import socialBar from '../UI/socialBar.vue'

/* eslint-disable */

export default Vue.extend({
  template: template,
  components: {
    projectDescription,
    marketDetails,
    service,
    socialBar
  },
  data: function () {
    return {
      currentTab: 1,
      showForm: false,
      selectedServices: [{
        serviceName: '',
        currentStatus: 'Not Started',
        finalDesign: '',
        designImages: '',
        timeElapsed: 0,
        basePay: 0
      }],
      docH : 0,
      docW: 0
      
    }
  },
   created() {
     this.onResize()
      
      
  },
  mounted(){
    window.addEventListener('resize', this.onResize)
    
  },
  updated(){
        
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
    },    
    
    select(name, price){
      
      
      var flag = false
      
      this.selectedServices.forEach(element => {
        if(element.serviceName === name){
          this.selectedServices = this.selectedServices.filter(service =>
              service.serviceName !== name              
          )
          
          flag = false
        }
        else flag = true       

        })

        if(flag === true){
          this.selectedServices.push({
          serviceName: name,
          currentStatus: 'Not Started',
          finalDesign: '',
          designImages: '',
          timeElapsed: 0,
          basePay: price
          })
        }
        
        flag = false

    },
    onResize(){
      this.docW = window.innerWidth ||
                  document.documentElement.clientWidth || 
                  document.body.clientWidth; 
      this.docH = window.innerHeight || 
                  document.documentElement.clientHeight || 
                  document.body.clientHeight; 
    },
    
    
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



