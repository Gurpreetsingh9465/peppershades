import Vue from 'vue';
import template from './marketDetails.html'
import styles from './marketDetails.less'

export default Vue.extend({
  template: template,
  data: function () {
    return {
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
    submitmarket(){
      this.$emit("marketdetails",this.market);
    }
  },
  created: function () {
  }
});
