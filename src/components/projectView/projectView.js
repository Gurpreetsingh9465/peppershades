import Vue from 'vue';
import template from './projectview.html'
import styles from './projectview.less'

/* eslint-disable */
import fullscreen from 'vue-fullscreen'
Vue.use(fullscreen)

export default Vue.extend({
  template: template,
  data: function () {
    return {
      imagewidth:100,
      fullshow:false,
      normalshow:true, 
      fullscreen: false   
    //  show: true

     
    }
  },
  methods: {
    zoomin(){
    this.imagewidth = this.imagewidth + 10;

    },
    zoomout(){
        if(this.imagewidth!==100)
        this.imagewidth=this.imagewidth-10;
    },
    toggle () {
      this.$refs['fullscreen'].toggle() // recommended
      // this.fullscreen = !this.fullscreen // deprecated
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    }

  },
  created: function () {
  }
});
