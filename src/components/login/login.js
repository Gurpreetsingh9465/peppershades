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
            Axios.post('/user/login', {
            email: this.email,
            password: this.password          
        }).then((result)=>{
            this.result= result;
            console.log(result.data);
        }).catch((err)=>{
            console.log(err,'5000');
        });      
    }
    },
    created: function() {
     
    }
});