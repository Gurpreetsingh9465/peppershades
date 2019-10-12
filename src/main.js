import Vue from 'vue';
import Router from './router';
import Root from './components/root/root';
import firebase from 'firebase'
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyA5aC1J822O08-g7vbN47ABfcdMxeSJAd0",
  authDomain: "myfirst-76386.firebaseapp.com",
  databaseURL: "https://myfirst-76386.firebaseio.com",
  projectId: "myfirst-76386",
  storageBucket: "myfirst-76386.appspot.com",
  messagingSenderId: "388192097576",
  appId: "1:388192097576:web:3045152930e97eabf86c1d",
  measurementId: "G-H2FH8MRK0E"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
window.db = db;

window.idpApp = new Vue({
  el: '#app',
  router: Router,
  components: {
    'root': Root
  },
  methods: { },
  mounted () {
    console.log('hi vue ');
  }
});
