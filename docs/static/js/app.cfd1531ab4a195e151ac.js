webpackJsonp([0],{"3TvQ":function(r,n){r.exports='<div class="selectandadd">\r\n        <div class="heading row justify-content-md-center center">\r\n                \r\n               <div class="inside-row col-lg-8  align-self-center">\r\n                   <div class="row main-title center justify-content-md-center">\r\n                    <div class="back-arrow center">\r\n                            <img src="./static/assets/images/Group 36.svg" alt="">\r\n                    </div>\r\n                    <div class="heading-text center">\r\n                        <div class="center-align center"> <h2>Starting a new business</h2></div>\r\n                           \r\n                    </div>\r\n                </div>\r\n               </div>\r\n           \r\n        </div>\r\n        <div class="options row">\r\n            <div class="col-lg-10 offset-lg-1 center">\r\n                <div class="row">\r\n            <div class="col-md-4 active  dd options center text-center">\r\n              \r\n                    <h4 class="">  Select and add</h4>\r\n            </div>\r\n            <div class="col-md-4 options center text-center">\r\n   \r\n                   \r\n                    <h5> Project Description</h5>\r\n                                </div>\r\n                <div class="col-md-4 options center text-center">\r\n  \r\n                        <h5>Audience & Marketing</h5>\r\n                                              \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row item-container mt-16">\r\n                <div class="col-lg-10 offset-lg-1 center">\r\n                    <div class="row">\r\n                <div class="col-md-3 col-lg-3 item active-item">\r\n                    \r\n                        <img src="./static/assets/images/Group 36.svg" alt="">\r\n\r\n                <h4 class="mt-16">Logo</h4>\r\n                <p class="body1 mt-16">starting at 123213crores</p>\r\n                    \r\n                    \r\n        </div>\r\n        <div class="col-md-3 col-lg-3 item non-active ">\r\n                    \r\n                <img src="./static/assets/images/Group 36.svg" alt="">\r\n\r\n        <h4 class="mt-16">Logo</h4>\r\n        <p class="body1 mt-16">starting at 123213crores</p>\r\n            \r\n            \r\n</div>\r\n    </div>\r\n                </div>\r\n        </div>\r\n</div>'},"6+bf":function(r,n){},FJwz:function(r,n){},"H8+S":function(r,n){r.exports='<div class="designview">\r\n<div class="row">\r\n    <div class="col-lg-8"></div>\r\n    \x3c!-- chatbox section starts--\x3e\r\n<div class="col-lg-4 chat-col">\r\n<div class="chat-title">\r\n  \r\n    <div class="chat-pic">\r\n            <img src=""alt="">\r\n    </div>\r\n    <h6 class="title-text"></h6>\r\n</div>\r\n<div class="chat-body">\r\n    <div class="msg-container" v-for="message in messages">\r\n        <div :class="[message.author===authUser.displayName?\'alignright\':\'normal\']">\r\n      <div :class="[message.author===authUser.displayName?\'sender\':\'receiver\']">\r\n        <p class="body1">\r\n    {{message.message}}\r\n        </p>\r\n    </div>\r\n</div>\r\n</div> \r\n\r\n</div>\r\n<div class="chat-input ">\r\n    <div class="chat-textbox border-bottom">\r\n        <div class="chattext">\r\n            <input @keyup.enter="saveMessage"  v-model="message" type="text" class="write_msg" placeholder="Type a message" />\r\n\r\n        </div>\r\n        <div class="attachbutton center">\r\n            <button></button>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class="send-button center">\r\n        <button></button>\r\n    </div>\r\n</div>\r\n</div>\r\n  \x3c!-- chatbox section ends--\x3e\r\n</div>\r\n</div>\r\n'},NHnr:function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("7+uW"),s=e("/ocq"),i=e("wS/E"),a=e.n(i),o=(e("Sisb"),e("vZId")),d=e.n(o),c=(e("zwyK"),t.a.extend({template:d.a,data:function(){return{}},methods:{},created:function(){}})),l=t.a.extend({components:{projectForm:c},template:a.a,data:function(){return{logo:"logo"}},methods:{},created:function(){}}),v=e("pTah"),p=e.n(v),m=(e("iYSA"),t.a.extend({components:{headerElement:l},template:p.a,data:function(){return{}},methods:{},created:function(){}})),u=e("bpiX"),g=e.n(u),h=(e("6+bf"),t.a.extend({template:g.a,data:function(){return{}},methods:{},created:function(){}})),b=e("zC9r"),f=e.n(b),y=(e("qXa6"),t.a.extend({template:f.a,data:function(){return{}},methods:{},created:function(){}})),x=e("ugK3"),w=e.n(x),k=(e("sxij"),t.a.extend({template:w.a,data:function(){return{}},methods:{},created:function(){}})),S=e("tY79"),j=e.n(S),A=(e("n4o6"),t.a.extend({template:j.a,data:function(){return{}},methods:{},created:function(){}})),H=e("kwek"),T=e.n(H),M=(e("O4fS"),t.a.extend({template:T.a,data:function(){return{}},methods:{},created:function(){}})),P=e("3TvQ"),N=e.n(P),G=(e("uPJ3"),t.a.extend({template:N.a,data:function(){return{}},methods:{},created:function(){}})),I=e("H8+S"),E=e.n(I),B=(e("tuB7"),e("kxiW")),D=e.n(B),O=t.a.extend({template:E.a,data:function(){return{message:null,messages:[],authUser:{}}},methods:{scrollToBottom:function(){var r=document.querySelector(".chat-body");r.scrollTop=r.scrollHeight},saveMessage:function(){var r=this;db.collection("chat").add({message:this.message,author:this.authUser.displayName,createdAt:new Date}).then(function(){r.scrollToBottom()}),this.message=null},fetchMessages:function(){var r=this;db.collection("chat").orderBy("createdAt").onSnapshot(function(n){var e=[];n.forEach(function(r){e.push(r.data())}),r.messages=e,setTimeout(function(){r.scrollToBottom()},0)})}},created:function(){var r=this;D.a.auth().onAuthStateChanged(function(n){r.authUser=n||{}}),this.fetchMessages()},beforeRouteEnter:function(r,n,e){e(function(r){D.a.auth().onAuthStateChanged(function(n){n?e():r.$router.push("/login")})})}}),q=e("fgf4"),C=e.n(q),F=(e("FJwz"),t.a.extend({template:C.a,data:function(){return{}},methods:{login:function(){var r=this,n=new D.a.auth.GoogleAuthProvider;n.addScope("https://www.googleapis.com/auth/contacts.readonly"),D.a.auth().signInWithPopup(n).then(function(n){n.credential.accessToken,n.user;r.$router.push("/designview")}).catch(function(r){r.code,r.message,r.email,r.credential})}},created:function(){}}));t.a.use(s.a);var L=new s.a({routes:[{path:"",name:"homepage",component:M},{path:"/targetAudience",name:"targetAudience",component:y},{path:"/marketBusiness",name:"marketBusiness",component:k},{path:"/selectandadd",name:"selectandadd",component:G},{path:"/designview",name:"designview",component:O},{path:"/login",name:"login",component:F},{path:"/chooseService",name:"chooseService",component:A},{path:"/links",name:"links",component:h}]});e("881v");D.a.initializeApp({apiKey:"AIzaSyA5aC1J822O08-g7vbN47ABfcdMxeSJAd0",authDomain:"myfirst-76386.firebaseapp.com",databaseURL:"https://myfirst-76386.firebaseio.com",projectId:"myfirst-76386",storageBucket:"myfirst-76386.appspot.com",messagingSenderId:"388192097576",appId:"1:388192097576:web:3045152930e97eabf86c1d",measurementId:"G-H2FH8MRK0E"});var z=D.a.firestore();window.db=z,window.idpApp=new t.a({el:"#app",router:L,components:{root:m},methods:{},mounted:function(){console.log("hi vue ")}})},O4fS:function(r,n){},Sisb:function(r,n){},bpiX:function(r,n){r.exports='<ul>\r\n  <li>\r\n    <router-link to="/projectform">new project</router-link>\r\n  </li>\r\n\r\n  <li>login</li>\r\n\r\n  <li>dashboard</li>\r\n</ul>\r\n'},fgf4:function(r,n){r.exports='<div class="login">\r\n    <div>\r\n        <h3>Please login with your goole account\r\n\r\n        </h3>\r\n        <button @click="login">login wiht google</button>\r\n    </div>\r\n</div>'},iYSA:function(r,n){},kwek:function(r,n){r.exports='<div class="homepage">\r\n\r\n\x3c!--<div class="home-main">\r\n\r\n<div class="pepper">peppershades</div>\r\n<div class="form-group has-search">\r\n  <span class="fa fa-search form-control-feedback"></span>\r\n  <input type="text" class="form-control" placeholder="Logo, app designs etc">\r\n</div>\r\n<div class="row cardrow">\r\n  <div class="col-lg-3"> \r\n    <div class="card" style="width: 18rem;">\r\n      <div class="card-body">\r\n        <h5 class="card-title">Starting A new business card</h5>\r\n\r\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.<i class="fa fa-arrow-right" aria-hidden="true"></i></p>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-lg-3"> \r\n    <div class="card" style="width: 18rem;">\r\n      <div class="card-body">\r\n        <h5 class="card-title">A new\r\n          brand identity</h5>\r\n       \r\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content. <i class="fa fa-arrow-right" aria-hidden="true"></i></p>\r\n\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-lg-3"> \r\n    <div class="card" style="width: 18rem;">\r\n      <div class="card-body">\r\n        <h5 class="card-title">Custom\r\n          Project</h5>\r\n      \r\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content. <i class="fa fa-arrow-right" aria-hidden="true"></i></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n  \r\n   ends--\x3e\r\n\r\n  \r\n      <div class="home-main">\r\n    <div class="cover-left">\r\n\r\n           <div class="cover">\r\n              <img src="./static/assets/images/cover-image.png" alt="">\r\n            \r\n            </div>\r\n        <div class="logo-margin">    </div>\r\n        <div class="logo">\r\n        <img src="./static/assets/images/logo.svg">\r\n      </div>\r\n\r\n        <div class="row">\r\n          <div class="col-lg-6">\r\n            <div class="search-container">\r\n              <div class="search-box">\r\n     <div class="top-search ">\r\n        <div class="left-search center"> \r\n          <img src="./static/assets/images/search.svg" alt="">\r\n        </div>\r\n        <div class="text-search"> \r\n          <input type="text" placeholder="Logo, app desgins etc.."> \r\n        </div>\r\n     <div class="right-search center">\r\n       <div class="forward-white center">\r\n         <button>\r\n        <img src="./static/assets/images/forward-white.svg" alt=""></button> </div> </div>\r\n       \r\n     <div class="bottom-search" >\r\n   \r\n     </div>\r\n \r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        </div>\r\n\r\n\r\n      </div> \r\n      <div class="bottom-card row">\r\n          <div class="col-md-4 col-lg-3 "> \r\n              <div class="card" >\r\n                <div class="card-body">\r\n                  <h3 class="card-title">Starting a new business</h3>\r\n          <div class="package-des">\r\n            <div class="package-des-text">\r\n                \r\n              <p class="card-text">Some quick example text to dfdbuild on the card title and make up the bulk of the card\'s content.</p></div>\r\n            <div class="package-go center">\r\n                <img src="./static/assets/images/forward.svg" alt="">\r\n            </div>   \r\n            </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="col-lg-3 col-md-3"> \r\n                <div class="card" >\r\n                  <div class="card-body">\r\n                    <h3 class="card-title">Starting a new business</h3>\r\n            <div class="package-des">\r\n              <div class="package-des-text">\r\n                  \r\n                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p></div>\r\n              <div class="package-go center">\r\n                  <router-link to="/selectandadd">\r\n                    <img src="./ static/assets/images/forward.svg" alt="">\r\n        \r\n                  </router-link>\r\n                 \r\n              </div>   \r\n              </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="col-lg-3 col-md-3"> \r\n                  <div class="card" >\r\n                    <div class="card-body">\r\n                      <h3 class="card-title">Starting a new business</h3>\r\n              <div class="package-des">\r\n                <div class="package-des-text">\r\n                    \r\n                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p></div>\r\n                <div class="package-go center">\r\n                    <img src="./static/assets/images/forward.svg" alt="">\r\n                </div>   \r\n                </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n      </div>\r\n     \r\n</div>\r\n</div>'},n4o6:function(r,n){},pTah:function(r,n){r.exports='<div class="root-main">\r\n  <headerElement></headerElement>\r\n  <div class="view">\r\n  <router-view></router-view></div>\r\n</div>\r\n'},qXa6:function(r,n){},sxij:function(r,n){},tY79:function(r,n){r.exports="<div>\r\n  hello\r\n</div>\r\n"},tuB7:function(r,n){},uPJ3:function(r,n){},ugK3:function(r,n){r.exports='<div class="marketbusiness-form">\r\n    <div class="container-fluid main  border-bottom border-dark ">\r\n        <div class="row">\r\n              <div class="col-lg-3"></div>\r\n            <div class="col-lg-4 ml-5">\r\n            <h1>Marketing</h1>\r\n            <h1>& Business Information</h1>\r\n           \r\n            <div class="lines" style="display: flex">\r\n                      <div class=" processed-line mr-2"></div>\r\n                      <div class="processed-line mr-2"></div>\r\n                      <div class="active-line mr-2"></div>\r\n                      <div class="inactive-line mr-2"></div>\r\n                      <div class="inactive-line mr-2"></div>\r\n               \r\n              </div>\r\n              \r\n             \r\n            </div>\r\n         \r\n        </div>\r\n  \r\n        </div>\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-lg-3"></div>\r\n      <div class="col-lg-6 projectForm">\r\n        <p> We care for the best results on the first go without wasting your time, the process\r\n          would be more easier for us if you will provide more information about your project.\r\n        </p>\r\n        <a class="color-primary">SKIP THIS PART</a>\r\n        <form>\r\n          <div class="projectDetails">\r\n\r\n            <p class="caption">Competitors</p>\r\n            <div class="form-group row ">\r\n\r\n              <div class="col-lg-5"><input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                                           aria-describedby="emailHelp" placeholder="Text 1 "></div>\r\n              <div class="col-lg-5"><input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                                           aria-describedby="emailHelp" placeholder="Text 2"></div>\r\n              <div class="col-lg-2">\r\n                <button type="button" class="btn">ADD</button>\r\n              </div>\r\n            </div>\r\n            <div class="form-group ">\r\n\r\n              <button type="button" class="btn btn-outline-secondary col-lg-10">\r\n                <div class="main-text">\r\n                  Text1 Text 2\r\n                </div>\r\n\r\n              </button>\r\n\r\n\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <img class="arrow" src="../../../static/assets/images/MaskGroup52.svg" style="width:16px; height:16px">\r\n              <input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                     aria-describedby="emailHelp" placeholder="Marketing Strategy">\r\n            </div>\r\n            <div class="form-group">\r\n\r\n              <input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                     aria-describedby="emailHelp" placeholder="Long Term Vision">\r\n            </div>\r\n            <div class="form-group">\r\n              <img class="arrow" src="../../../static/assets/images/MaskGroup52.svg" style="width:16px; height:16px">\r\n              <input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                     aria-describedby="emailHelp" placeholder="Strengths and Weakness">\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n          <router-link to="/chooseService">\r\n            <div style="text-align: center;">\r\n            <button type="submit" class="btn target btn-primary">Select\r\n              Items<img class="mr-1 button-hover" src="images/MaskGroup48.svg">\r\n            </button>\r\n            </div>\r\n          </router-link>\r\n>>>>>>> master\r\n        </form>\r\n      </div>\r\n      <div class="col-lg-3"></div>\r\n    </div>\r\n  </div>\r\n  \x3c!--section ends--\x3e\r\n\r\n</div>\r\n'},vZId:function(r,n){r.exports='<div class="project-form">\r\n    <div class="container-fluid main  border-bottom border-dark ">\r\n      <div class="row">\r\n            <div class="col-lg-3"></div>\r\n          <div class="col-lg-3 ml-5">\r\n          <h1>Project</h1>\r\n            <h1> & Description</h1>\r\n         \r\n          <div class="lines" style="display: flex">\r\n                    <div class="active-line mr-2"></div>\r\n                    <div class="inactive-line mr-2"></div>\r\n                    <div class="inactive-line mr-2"></div>\r\n                    <div class="inactive-line mr-2"></div>\r\n             \r\n            </div>\r\n            \r\n           \r\n          </div>\r\n       \r\n      </div>\r\n\r\n      </div>\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-lg-3"></div>\r\n      <div class="col-lg-6 projectForm">\r\n\r\n        <form>\r\n          <div class="projectDetails">\r\n            <div class="form-group">\r\n\r\n              <input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                     aria-describedby="emailHelp" placeholder="Project Name">\r\n            </div>\r\n            <div class="form-group">\r\n              <img class="arrow" src="../../../static/assets/images/MaskGroup52.svg" style="width:16px; height:16px">\r\n              <input type="text" class="form-control border-bottom border-dark" id="projectDesc"\r\n                     aria-describedby="emailHelp" placeholder="Project Description">\r\n            </div>\r\n\r\n            <div class="form-group">\r\n\r\n\r\n              <img class="arrow" src="../../../static/assets/images/MaskGroup48.svg" style="width:16px; height:16px">\r\n              <input type="text" class="form-control border-bottom border-dark" id="industry"\r\n\r\n                     aria-describedby="emailHelp" placeholder="Industry">\r\n\r\n            </div>\r\n            <div class="form-group">\r\n\r\n              <input type="text" class="form-control border-bottom border-dark" id="tagline"\r\n                     aria-describedby="emailHelp" placeholder="Tagline(If Any)">\r\n            </div>\r\n            <div class="form-group">\r\n\r\n              <input type="text" class="form-control border-bottom border-dark" id="foundation"\r\n                     aria-describedby="emailHelp" placeholder="What was the founding story?">\r\n            </div>\r\n            <div class="form-group">\r\n              <img class="arrow" src="../../assets/Mask%20Group%2051.svg" style="width:16px; height:16px">\r\n              <input type="text" class="form-control border-bottom border-dark" id="start_date"\r\n\r\n                     aria-describedby="emailHelp" placeholder="Founded On?">\r\n            </div>\r\n            <div class="form-group">\r\n\r\n              <input type="text" class="form-control border-bottom border-dark" id="value"\r\n                     aria-describedby="emailHelp" placeholder="Value Propositions">\r\n            </div>\r\n          </div>\r\n<div class="form-group row">\r\n  <div class="col-3 col-lg-3" ></div>\r\n          <router-link to="/targetAudience">\r\n            <button type="submit" class="btn target btn-primary"> Target\r\n              Audience <img class="mr-1 button-hover" src="../../../static/assets/images/MaskGroup48.svg">\r\n            </button>\r\n\r\n          </router-link>\r\n        </div>\r\n        </form>\r\n      </div>\r\n      <div class="col-lg-3"></div>\r\n    </div>\r\n  </div>\r\n  \x3c!--section ends--\x3e\r\n\r\n</div>\r\n'},"wS/E":function(r,n){r.exports='<div class="main-header">\r\n  <div class="header-top">\r\n     <div class="profile-pic"></div>\r\n     <div class="navtop">\r\n        <div class="links">\r\n           <p class="">CREATE PROJECT</p>\r\n        </div>\r\n        <div class="links">\r\n           <p class="">THE PROCESS</p>\r\n        </div>\r\n        <div class="links">\r\n           <p class="">PORTFOLIO</p>\r\n        </div>\r\n        <div class="links">\r\n           <p class="">BLOG</p>\r\n        </div>\r\n        <div class="links">\r\n           <p class="">HELP</p>\r\n        </div>\r\n     </div>\r\n  </div>\r\n  <div class="side-pane"> </div>\r\n  <div class="right-pane"></div>\r\n</div>'},zC9r:function(r,n){r.exports='<div class="project-form">\r\n    <div class="container-fluid main  border-bottom border-dark ">\r\n        <div class="row">\r\n              <div class="col-lg-3"></div>\r\n            <div class="col-lg-3 ml-5">\r\n            <h1>Target Audience</h1>\r\n           \r\n            <div class="lines" style="display: flex">\r\n                      <div class="processed-line mr-2"></div>\r\n                      <div class="active-line mr-2"></div>\r\n                      <div class="inactive-line mr-2"></div>\r\n                      <div class="inactive-line mr-2"></div>\r\n               \r\n              </div>\r\n              \r\n             \r\n            </div>\r\n         \r\n        </div>\r\n  \r\n        </div>\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-lg-3"></div>\r\n      <div class="col-lg-6 projectForm">\r\n\r\n        <form>\r\n          <div class="projectDetails">\r\n            <div class="form-group">\r\n              <img class="arrow" src="../../../static/assets/images/dropdownarrow.svg" style="width:16px; height:16px">\r\n              <input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                     aria-describedby="emailHelp" placeholder="Type">\r\n\r\n            </div>\r\n            Age\r\n            <div class="form-group row ">\r\n\r\n              <div class="col-lg-3"><input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                                           aria-describedby="emailHelp" placeholder="0"></div>\r\n              <div class="col-lg-3"><input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                                           aria-describedby="emailHelp" placeholder="24"></div>\r\n            </div>\r\n            <div class="form-group"> Gender\r\n              <div class="gender">\r\n                <button type="button" class="btn btn-outline-secondary">Secondary</button>\r\n                <button type="button" class="btn btn-outline-secondary">Secondary</button>\r\n                <button type="button" class="btn btn-outline-secondary">Secondary</button>\r\n              </div>\r\n\r\n            </div>\r\n            <div class="form-group">\r\n\r\n              <input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                     aria-describedby="emailHelp" placeholder="Qualification">\r\n            </div>\r\n            <div class="form-group">\r\n              <img class="arrow" src="../../../static/assets/images/MaskGroup52.svg" style="width:16px; height:16px">\r\n              <input type="text" class="form-control border-bottom border-dark" id="projectName"\r\n                     aria-describedby="emailHelp" placeholder="Problems they face">\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <router-link to="/marketBusiness">\r\n            <button type="submit" class="btn target btn-primary">\r\n             Target\r\n              Audience  <img class="mr-1 button-hover" src="../../../static/images/MaskGroup48.svg">\r\n            </button>\r\n          </router-link>\r\n        </form>\r\n      </div>\r\n      <div class="col-lg-3"></div>\r\n    </div>\r\n  </div>\r\n  \x3c!--section ends--\x3e\r\n\r\n</div>\r\n'},zwyK:function(r,n){}},["NHnr"]);
//# sourceMappingURL=app.cfd1531ab4a195e151ac.js.map