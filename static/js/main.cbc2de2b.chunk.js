(this["webpackJsonpchangmo-sung-react-project-five"]=this["webpackJsonpchangmo-sung-react-project-five"]||[]).push([[0],{32:function(e,t,a){e.exports=a(58)},37:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(29),r=a.n(s),i=(a(37),a(13)),l=a(6),c=a(7),u=a(9),d=a(8),p=a(10),m=(a(38),a(22)),g=a.n(m);g.a.initializeApp({apiKey:"AIzaSyCbwADKsJszQWH_OC62oCd7h8tUiTeOnRo",authDomain:"instagram-project-d291e.firebaseapp.com",databaseURL:"https://instagram-project-d291e.firebaseio.com",projectId:"instagram-project-d291e",storageBucket:"instagram-project-d291e.appspot.com",messagingSenderId:"333813161472",appId:"1:333813161472:web:b9ab0db66694c2c63602e5",measurementId:"G-WFWDFCLCE2"}),g.a.analytics();var f=g.a,h=a(14),b=a(15),I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).signOut=function(){e.state.auth.signOut(),e.state.auth.onAuthStateChanged((function(t){console.log(t),t||(e.setState({user:null}),window.location.reload(!1))}))},e.state={auth:f.auth()},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"navLogo"},o.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/project-five-97681.appspot.com/o/Z6fwRPBHhyVDwn8eFKzGX0eUQk13-favourite-images%2FJRr5JCPzDzVRYx1OPeUl?alt=media&token=72dacc8e-57dc-40f5-ba10-2249c4e15244",alt:"logo"})),o.a.createElement(h.b,{to:"/changmoSungReactProjectFive/"},"Go back home"),o.a.createElement(h.b,{to:"/changmoSungReactProjectFive/bio"},"Go to bio"),o.a.createElement("button",{onClick:this.signOut,className:"signOut"},"sign out")))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).uploadProfileImage=function(t){t.target.files[0].type.includes("video")?e.setState({profileVideoUploaded:!0,profileVideo:t.target.files[0]},(function(){return e.upload(e.state.profileVideo)})):e.setState({profileImageUploaded:!0,profileImage:t.target.files[0]},(function(){return e.upload(e.state.profileImage)}))},e.uploadGallery=function(t){e.setState({upload:!0}),t.target.files[0].type.includes("video")?e.setState({galleryVideoUploaded:!0,galleryVideo:t.target.files[0]},(function(){return e.upload(e.state.galleryVideo)})):e.setState({galleryImageUploaded:!0,galleryImage:t.target.files[0]},(function(){return e.upload(e.state.galleryImage)}))},e.upload=function(t){var a=e.state.database.collection("uniqueId").doc().id;e.state.storage.ref(e.state.upload?e.state.galleryImageUploaded?"".concat(e.props.user.uid,"-galleryImages/").concat(a):"".concat(e.props.user.uid,"-galleryVideos/").concat(a):e.state.profileImageUploaded?"".concat(e.props.user.uid,"-profileImage/profileImage"):"".concat(e.props.user.uid,"-profileVideo/profileVideo")).put(t).on("state_changed",(function(t){var a=Math.round(t.bytesTransferred/t.totalBytes*100);e.setState({progress:a})}),(function(e){console.log(e)}),(function(){e.state.storage.ref(e.state.upload?e.state.galleryImageUploaded?"".concat(e.props.user.uid,"-galleryImages"):"".concat(e.props.user.uid,"-galleryVideos"):e.state.profileImageUploaded?"".concat(e.props.user.uid,"-profileImage"):"".concat(e.props.user.uid,"-profileVideo")).child(e.state.upload?(e.state.galleryImageUploaded,"".concat(a)):e.state.profileImageUploaded?"profileImage":"profileVideo").getDownloadURL().then((function(t){e.state.profileImageUploaded||e.state.profileVideoUploaded?e.setState({profileImage:e.state.profileImageUploaded?t:null,profileImageUploaded:!1,profileVideo:e.state.profileVideoUploaded?t:null}):e.state.galleryImageUploaded?(e.props.userUploadedImageToDisplay(t),e.setState({galleryImageUploaded:!1})):(e.props.userUploadedVideoToDisplay(t),e.setState({galleryVideoUploaded:!1}))}))}))},e.state={storage:f.storage(),database:f.firestore(),progress:0,upload:!1,profileImage:null,profileVideo:null,galleryImage:null,galleryVideo:null,profileImageUploaded:!1,profileVideoUploaded:!1,galleryImageUploaded:!1,galleryVideoUploaded:!1},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"wrapper headerFlexContainer"},o.a.createElement("div",{className:"profileImage"},o.a.createElement("img",{src:this.state.profileImage?this.state.profileImage:this.props.profileImage,alt:"profile"}),o.a.createElement("label",{htmlFor:"profileImageUpload"},"profile"),o.a.createElement("input",{id:"profileImageUpload",type:"file",onChange:this.uploadProfileImage})),o.a.createElement("div",{className:"userInfo"},o.a.createElement("h1",null,this.props.user.email),o.a.createElement("p",null,this.props.userImages.length," posts"),o.a.createElement("label",{htmlFor:"fileUpload"},"UPLOAD"),o.a.createElement("input",{id:"fileUpload",type:"file",onChange:this.uploadGallery}),o.a.createElement("div",{className:"progressBar"},o.a.createElement("span",{style:{width:"".concat(this.state.progress,"%")}})))))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).enlargeImage=function(e){e.target.parentNode.classList.toggle("enlarged")},e.state={},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.userVideos),o.a.createElement("main",{className:"gallery"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",null,o.a.createElement(h.b,{to:"/changmoSungReactProjectFive/",exact:!0},"image"),o.a.createElement(h.b,{to:"/changmoSungReactProjectFive/videos",exact:!0},"video")),o.a.createElement(b.a,{path:"/changmoSungReactProjectFive/"},this.props.userImages.map((function(t,a){return o.a.createElement("div",{key:a,className:"galleryImage",tabIndex:"0"},o.a.createElement("img",{src:t,alt:"user uploaded",onClick:e.enlargeImage}),o.a.createElement("button",{onClick:e.props.deleteImage},"delete"))}))),o.a.createElement(b.a,{path:"/changmoSungReactProjectFive/videos"},this.props.userVideos.map((function(t,a){return o.a.createElement("div",{key:a,className:"galleryImage",tabIndex:"0"},o.a.createElement("video",{src:t,alt:"user uploaded",controls:"controls",onClick:e.enlargeImage}),o.a.createElement("button",{onClick:e.props.deleteVideo},"delete"))})))))}}]),t}(n.Component),U=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).signIn=function(t){t.preventDefault();var a=e.state.signInEmail.current.value,n=e.state.signInPassword.current.value;e.state.auth.signInWithEmailAndPassword(a,n).catch((function(e){var t=e.message;alert(t)})),e.state.auth.onAuthStateChanged((function(t){t&&e.setState({user:t},(function(){e.props.userInfo(t)}))}))},e.signUp=function(t){t.preventDefault();var a=e.state.signUpEmail.current.value,n=e.state.signUpPassword.current.value;e.state.auth.createUserWithEmailAndPassword(a,n).catch((function(e){var t=e.message;alert(t)})),e.state.auth.onAuthStateChanged((function(t){e.setState({user:t,signUpButtonClicked:!e.state.signUpButtonClicked})}))},e.signUpPopUp=function(){e.setState({signUpButtonClicked:!e.state.signUpButtonClicked})},e.state={user:null,signUpButtonClicked:!1,auth:f.auth(),signInEmail:o.a.createRef(),signInPassword:o.a.createRef(),signUpEmail:o.a.createRef(),signUpPassword:o.a.createRef()},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"landingPage"},o.a.createElement("form",{className:"signInForm",onSubmit:this.signIn},o.a.createElement("label",{htmlFor:"signInEmail"},"Email"),o.a.createElement("input",{ref:this.state.signInEmail,id:"signInEmail",type:"email"}),o.a.createElement("label",{htmlFor:"signInPassword"},"Password"),o.a.createElement("input",{ref:this.state.signInPassword,id:"signInPassword",type:"password"}),o.a.createElement("button",null,"Login")),this.state.signUpButtonClicked?o.a.createElement("form",{onSubmit:this.signUp},o.a.createElement("label",{htmlFor:"signUpEmail"},"Email"),o.a.createElement("input",{ref:this.state.signUpEmail,id:"signUpEmail",type:"email"}),o.a.createElement("label",{htmlFor:"signUpPassword"},"Password"),o.a.createElement("input",{ref:this.state.signUpPassword,id:"signUpPassword",type:"password"}),o.a.createElement("button",null,"Sign up"),o.a.createElement("span",{onClick:this.signUpPopUp},"X")):null,this.state.signUpButtonClicked?null:o.a.createElement("button",{onClick:this.signUpPopUp},"Sign up"))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).setBio=function(t){t.preventDefault();var a=e.state.database.collection(e.state.user.uid).doc().id,n=e.state.title.current.value,o=e.state.bio.current.value;n&&o?e.state.database.collection(e.state.user.uid).doc(a).set({title:n,bio:o,id:a}):alert("please fill in the blank"),e.state.title.current.value="",e.state.bio.current.value=""},e.deleteBio=function(t){if(window.confirm("are you sure?")){var a=t.target.parentNode.id;e.state.database.collection(e.state.user.uid).onSnapshot((function(t){var n=Object(i.a)(e.state.userBios).filter((function(e){return e.id!==a}));e.setState({userBios:n})})),e.state.database.collection(e.state.user.uid).doc(a).delete()}},e.state={database:f.firestore(),title:o.a.createRef(),bio:o.a.createRef(),userBios:[],auth:f.auth(),user:null},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.auth.onAuthStateChanged((function(t){t&&e.setState({user:t},(function(){e.state.database.collection(e.state.user.uid).onSnapshot((function(t){var a=Object(i.a)(e.state.userBios);t.docChanges().forEach((function(e){a.unshift(e.doc.data())})),e.setState({userBios:a})}))}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bioSection"},o.a.createElement("form",{onSubmit:this.setBio,className:"bioForm"},o.a.createElement("label",{htmlFor:"title"},"Title"),o.a.createElement("input",{type:"text",id:"title",ref:this.state.title}),o.a.createElement("label",{htmlFor:"bio"},"Bio"),o.a.createElement("input",{type:"textarea",id:"bio",ref:this.state.bio}),o.a.createElement("button",null,"add to bio")),o.a.createElement("div",{className:"bioContainer"},this.state.userBios.map((function(t,a){return o.a.createElement("div",{key:a,id:t.id,className:"bio"},o.a.createElement("h3",null,t.title),o.a.createElement("p",null,t.bio),o.a.createElement("button",{onClick:e.deleteBio},"Delete"))}))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).userUploadedImageToDisplay=function(t){var a=Object(i.a)(e.state.userImages);a.unshift(t),e.setState({userImages:a})},e.userUploadedVideoToDisplay=function(t){console.log(t);var a=Object(i.a)(e.state.userVideos);a.unshift(t),e.setState({userVideos:a})},e.deleteImage=function(t){if(window.confirm("are you sure?")){var a=Object(i.a)(e.state.userImages),n=t.target.parentNode.childNodes[0].currentSrc,o=a.filter((function(e){return e!==n}));e.setState({userImages:o}),e.state.storage.refFromURL(n).delete()}},e.deleteVideo=function(t){if(window.confirm("are you sure?")){var a=Object(i.a)(e.state.userVideos),n=t.target.parentNode.childNodes[0].currentSrc,o=a.filter((function(e){return e!==n}));e.setState({userImages:o}),e.state.storage.refFromURL(n).delete()}},e.state={database:f.firestore(),storage:f.storage(),auth:f.auth(),user:null,userImages:[],userVideos:[],profileImage:null,profileVideo:null},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.auth.onAuthStateChanged((function(t){t&&e.setState({user:t},(function(){var t=Object(i.a)(e.state.userImages),a=Object(i.a)(e.state.userVideos);e.state.storage.ref().child("".concat(e.state.user.uid,"-galleryImages")).listAll().then((function(a){a.items.map((function(a){a.getDownloadURL().then((function(a){t.push(a),e.setState({userImages:t})}))}))})),e.state.storage.ref().child("".concat(e.state.user.uid,"-galleryVideos")).listAll().then((function(t){t.items.map((function(t){t.getDownloadURL().then((function(t){a.push(t),e.setState({userVideos:a})}))}))})),e.state.storage.ref().child("".concat(e.state.user.uid,"-profileImage")).listAll().then((function(t){t.items.map((function(t){t.getDownloadURL().then((function(t){e.setState({profileImage:t})}))}))})),e.state.storage.ref().child("".concat(e.state.user.uid,"-profileVideo")).listAll().then((function(t){t.items.map((function(t){t.getDownloadURL().then((function(t){e.setState({profileImage:t})}))}))}))}))}))}},{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(I,null),o.a.createElement(b.a,{path:"/changmoSungReactProjectFive/"},this.state.user?o.a.createElement("div",null,o.a.createElement(E,{user:this.state.user,userImages:this.state.userImages,profileImage:this.state.profileImage,userUploadedImageToDisplay:this.userUploadedImageToDisplay,userUploadedVideoToDisplay:this.userUploadedVideoToDisplay}),o.a.createElement(v,{userImages:this.state.userImages,userVideos:this.state.userVideos,deleteImage:this.deleteImage,deleteVideo:this.deleteVideo})):o.a.createElement(U,{userInfo:this.userInfo})),o.a.createElement(b.a,{path:"/changmoSungReactProjectFive/bio",render:function(){return o.a.createElement(y,null)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.cbc2de2b.chunk.js.map