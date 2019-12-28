import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header/header'
import root from '../components/root/root'
import projectForm from '../components/projectform/projectform'
import homepage from '../components/homepage/homepage'
import chatBox from '../components/chatbox/chatbox'
import login from '../components/login/login'
import dashboard from '../components/dashboard/dashboard'
import projectView from '../components/projectview/projectview'
import signup from '../components/signup/signup'
import password from '../components/password/password'

/* eslint-disable */


Vue.use(Router);
export default new Router({
  routes: [
        {
          path: '/projectform',
          name: 'projectform',
          component: projectForm
        },
        {
          path:'/login',
          name:'login',
          component:login
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
          path: '/projectview',
          name:'projectview',
          component:projectView
        },
        {
          path: '/chatbox',
          name: 'chatBox',
          component: chatBox
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/signup',
          name: 'signup',
          component: signup
        },
        {
          path: '/password/:state',
          name: 'password',
          component: password
        }
      
   
  ]
})
