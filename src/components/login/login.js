/* eslint-disable */

import Vue from 'vue';
import template from './login.html'
import styles from './login.less'
import socialBar from '../UI/socialBar.vue'
import cover from '../UI/cover.vue'

    import Axios, {AxiosInstance} from 'axios';
    import axiosCookieJarSupport from 'axios-cookiejar-support';
    import {CookieJar} from 'tough-cookie';

    




export default Vue.extend({
    template: template,
    components: {
        socialBar,
        cover
    },

    data: function() {
        return {
            email: '',
            password: '',
            result: ''
        }
    },
     mounted(){
    window.addEventListener('resize', this.onResize)
    
    },
    methods: {
        getData() {            
       
    },
    async login(){    
            this.result = Axios.post('http://127.0.0.1:3000/user/login', {
            email: this.email,
            password: this.password          
        });      
        
    }
    },
    created: function() {
     
    }
});