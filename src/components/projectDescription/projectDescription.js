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
      ProjectDescription:[{
        name:'',
        industry:'',
        target:'',
        description:'' }],
        employees:[]

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
    },
    submit: function(){
      this.$emit("inputdata",this.ProjectDescription);
    },
    
    async getEmployees() {
      try {
        const response = await fetch('http://localhost:3000/users/1')
        const data = await response.json()
        this.employees = data
        console.log(this.employees)
      } catch (error) {
        console.error(error)
      }
    }
  },
  created: function () {
    

  }
  
  
});



