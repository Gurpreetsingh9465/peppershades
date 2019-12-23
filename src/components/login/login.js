/* eslint-disable */

import Vue from 'vue';
import template from './login.html'
import styles from './login.less'
import socialBar from '../UI/socialBar.vue'
import cover from '../UI/cover.vue'

export default Vue.extend({
    template: template,
    components: {
        socialBar,
        cover
    },

    data: function() {
        return {
            
        }
    },
     mounted(){
    window.addEventListener('resize', this.onResize)
    
    },
    methods: {
     
    },
    created: function() {
     
    }
});