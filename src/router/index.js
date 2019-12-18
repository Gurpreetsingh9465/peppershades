import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header/header'
import root from '../components/root/root'
import projectForm from '../components/projectForm/projectForm'
import homepage from '../components/homepage/homepage'
import chatBox from '../components/chatBox/chatBox'
import login from '../components/login/login'
import dashboard from '../components/dashboard/dashboard'
import projectView from '../components/projectView/projectView'

/* eslint-disable */


Vue.use(Router);
export default new Router({
  routes: [
        {
          path: '/projectform',
          name: 'projectForm',
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
          name:'projectView',
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
        }
      
   
  ]
})
