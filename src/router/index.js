import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header/header'
import root from '@/components/root/root'
import links from '@/components/links/links'
import targetAudience from '@/components/header/targetAudience/targetAudience'
import projectform from '../components/header/projectform/projectform';
import marketBusiness from '../components/header/marketbusiness/marketbusiness';
import chooseService from '../components/header/chooseService/chooseService';

Vue.use(Router);
export default new Router({
 routes : [
   { path: '/',
     name: 'root',
     component: root 
   },
   { path: '/newproject',
     name: 'header',
     component: header,
     children: [
      { path: '/projectform',
      name: 'projectform',
      component: projectform
          },
          { path: '/targetAudience',
        name: 'targetAudience',  
        component: targetAudience
      },
      { path: '/marketBusiness',
      name: 'marketBusiness',  
      component: marketBusiness
    },
    { path: '/chooseService',
    name: 'chooseService',  
    component: chooseService
  },
     ]
   },
   { path: '/links',
     name: 'links',  
     component: links 
   },
  
  ]
})
