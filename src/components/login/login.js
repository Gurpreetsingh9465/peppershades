import Vue from 'vue';
import template from './login.html'
import styles from './login.less'
import firebase from 'firebase'

/* eslint-disable */

export default Vue.extend({
    template: template,
    data: function () {
      return {}
    },
    methods: {
      loginwithfacebook() {
        var fbprovider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbprovider).then(result=> {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          this.$router.push('/designview')
          // 
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      
  
  },
        loginwithgoogle() {
            var provider = new firebase.auth.GoogleAuthProvider();
       provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithPopup(provider).then(result=> {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  this.$router.push('/designview')
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
      
      
      },
      
    },
    created: function () {
    }
  });