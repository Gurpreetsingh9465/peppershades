import Vue from 'vue';
import template from './projectdescription.html'
import styles from './projectdescription.less'

/* eslint-disable */

export default Vue.extend({
  template: template,
  
  data: function () {
    return {
      chips:[{
        name: '',
        href: '',
        isURL: false
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
  computed: {
    
  },
  methods: {
    addLink(){
       var flag = false
       var linksArr = this.chipValue.split(',')

      
      linksArr.forEach(element => {
          
          var url = ''      
          try{
            var url = new URL(element).hostname   
            flag = true
            url = url.split('.')
            if(url.length <= 2) url = url[0]       
            else url = url[1]
          }
          catch(err){
            url = element
          }        
          this.chips.push({
          name : url,
          href: element,
          isURL: flag
          })
      });            
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
    

  },
  handleArray(){
    this.$emit('handleDescription', this.value)
  }

  
  
});



