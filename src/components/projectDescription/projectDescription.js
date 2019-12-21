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
      value: 'hey'

    }
  },
  methods: {
    addLink(){

       var linksArr = this.chipValue.split(',')

      
      linksArr.forEach(element => {
          
          var url = ''      
          try{
            var url = new URL(element).hostname          
          }
          catch(err){
            url = element
          }        
          this.chips.push({
          name : url,
          href: element
          })
      });            
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
    

  },
  handleArray(){
    this.$emit('handleDescription', this.value)
  }

  
  
});



