import Vue from 'vue';
import template from './projectDescription.html'
import styles from './projectDescription.less'

/* eslint-disable */

export default Vue.extend({
  template: template,
  
  data: function () {
    return {
      chips:[{
        name: '',
        href: ''
      }],
      chipValue:'', 

    }
  },
  methods: {
    addLink(){

      var url = ''
      
      try{
          var url = new URL(this.chipValue).hostname
          
      }
      catch(err){
          url = this.chipValue
        }
        
          this.chips.push({
          name : url,
          href: this.chipValue
          })
        
        
        this.chipValue=''
        
      }, 
      
    
    removeChip(i){

      this.chips.splice(i, 1)
      
    },
    redirect(href){
      window.location.href = href
    }
    
    
  },
  created: function () {
    

  }
});



