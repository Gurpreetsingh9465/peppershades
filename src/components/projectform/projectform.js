import Vue from 'vue';
import template from './projectform.html'
import styles from './projectform.less'

/* eslint-disable */

export default Vue.extend({
  template: template,
  data: function () {
    return {
      chips:[],
      chipValue:''

    }
  },
  methods: {
    addLink(){
      this.chips.push(this.chipValue)
      this.chipValue=''
    },
    removeChip(){
      this.chips.pop(this.chipValue)
    }
  },
  created: function () {
    

  }
});



