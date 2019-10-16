import Vue from 'vue';
import template from './designview.html'
import styles from './designview.less'
import firebase from 'firebase'

/* eslint-disable */

export default Vue.extend({
  template: template,
  data(){
    return {
        message:null,
        messages:[],
        authUser:{}
    }
},
methods:{
  scrollToBottom() {
  let box = document.querySelector('.chat-body');
  box.scrollTop = box.scrollHeight;
  },
    saveMessage() {
        //save to firestore
        db.collection('chat').add({
            message: this.message,
            author: this.authUser.displayName,
            createdAt: new Date()

        }).then(()=> {
          this.scrollToBottom();
        })
        this.message = null;
    },

fetchMessages() {
   db.collection('chat').orderBy('createdAt').onSnapshot((querySnapshot) => {
  let allMessages = []
  querySnapshot.forEach(doc => {
      allMessages.push(doc.data())
  })
  this.messages=allMessages;
  setTimeout(()=>{
    this.scrollToBottom();
  },0);
})
}

},
created(){
    firebase.auth().onAuthStateChanged(user =>{
        if(user){
            this.authUser=user;

        }
        else{
            this.authUser={}
        }
    })
    this.fetchMessages();

},
beforeRouteEnter(to,from,next){
    next(vm =>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user){

                next();
            }
            else{
                vm.$router.push('/login')
            }
        })
    })
}

 
});
