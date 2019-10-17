import Vue from 'vue';
import template from './zoomimage.html'
import styles from './zoomimage.less'


export default Vue.extend({
  template: template,
  data: function () {
    return {
      imagewidth:100,
      fullshow:false,
      normalshow:true,    
    //  show: true

     
    }
  },
  methods: {
    zoomin(){
    this.imagewidth = this.imagewidth+ 10;

    },
    zoomout(){
if(this.imagewidth!==100)
this.imagewidth=this.imagewidth-10;
    }
  },
  created: function () {
  }
});
