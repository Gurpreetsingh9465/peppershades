import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header/header'
import root from '../components/root/root'

import projectform from '../components/projectform/projectform'
import homepage from '../components/homepage/homepage'
import designview from '../components/designview/designview'
import login from '../components/login/login'
import dashboard from '../components/dashboard/dashboard'
import zoomimage from '../components/zoomimage/zoomimage'

Vue.use(Router);
export default new Router({
  routes: [
        {
          path: '/projectform',
          name: 'projectform',
          component: projectform
        },
        {
          path: '',
          name: 'homepage',
          component: homepage
        },
        {
          path:'/dashboard',
          name: 'dashboard',
          component: dashboard
        },

        {
          path: '/zoomimage',
          name:'zoomimage',
          component:zoomimage
        },
   

        {
          path: '/designview',
          name: 'designview',
          component: designview
        },
        {
          path: '/login',
          name: 'login',
          component: login
        }
      
   
  ]
})
