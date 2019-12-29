/* eslint-disable */

import Vue from 'vue';
import template from './marketdetails.html'
import styles from './marketdetails.less'

export default Vue.extend({
  template: template,
  data: function () {
    return {
      chips:[{
        name: '',
        href: ''
      }],
      chipValue:'', 
      market:[{
        age1:'',
        age2:'',
        gender: '',
        audience: ''
      }]
    }
  },
  props: {
      
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
    },
    closeForm(){
        this.$emit('cancel')
    },
    submitmarket(){
      this.$emit("marketdetails",this.market);
    }
  },
  created: function () {
  }
});
