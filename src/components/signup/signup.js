
            import Vue from 'vue';
            import template from './signup.html'
            import styles from './signup.less'
            import socialBar from '../UI/socialBar.vue'
            import { ValidationObserver, extend, localize } from 'vee-validate';
 
            import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';


          // Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
          

export default Vue.extend({
  
    template: template,
    components: {
            socialBar,
         
        },
  data: function () {
    return {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        submitted: false
    }
  },
  methods: {
    onSubmit () {
      alert('Form has been submitted!');
    }
  },
  created: function () {
  }
});