import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header/header'
import root from '../components/root/root'
import links from '../components/links/links'
import targetAudience from '../components/targetAudience/targetAudience'
import ProjectForm from '../components/projectform/projectform';
import marketBusiness from '../components/marketbusiness/marketbusiness';
import chooseService from '../components/chooseService/chooseService';
import homepage from '../components/homepage/homepage'
import selectandadd from '../components/selectandadd/selectandadd'
import designview from '../components/designview/designview'
import login from '../components/login/login'
import dashboard from '../components/dashboard/dashboard'

Vue.use(Router);
export default new Router({
  routes: [
        /*{
          path: '',
          name: 'ProjectForm',
          component: ProjectForm
        },*/
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
          path: '/targetAudience',
          name: 'targetAudience',
          component: targetAudience
        },
        {
          path: '/marketBusiness',
          name: 'marketBusiness',
          component: marketBusiness
        },
        {
          path: '/selectandadd',
          name: 'selectandadd',
          component: selectandadd
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
        },
        {
          path: '/chooseService',
          name: 'chooseService',
          component: chooseService
        },
    // {
    //   path: '/new-project',
    //   name: 'header',
    //   component: header,
    //
    // },
    {
      path: '/links',
      name: 'links',
      component: links
    }
  ]
})
