(this["webpackJsonpchangmo-sung-react-project-five"]=this["webpackJsonpchangmo-sung-react-project-five"]||[]).push([[0],{32:function(e,t,a){e.exports=a(58)},37:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(29),r=a.n(o),i=(a(37),a(14)),l=a(6),c=a(7),u=a(9),d=a(8),m=a(10),p=(a(38),a(22)),g=a.n(p);g.a.initializeApp({apiKey:"AIzaSyAUDhlHmbfFpfZ8M9bPD-zoobBCosu57w8",authDomain:"react-project-3f54a.firebaseapp.com",databaseURL:"https://react-project-3f54a.firebaseio.com",projectId:"react-project-3f54a",storageBucket:"react-project-3f54a.appspot.com",messagingSenderId:"139563383386",appId:"1:139563383386:web:53e78a4d1203490b723663",measurementId:"G-NY657CJ2J2"}),g.a.analytics();var f=g.a,h=a(12),b=a(15),I=(n.Component,function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).uploadProfileImage=function(t){t.target.files[0].type.includes("video")?alert("For profile, you can only upload image"):e.setState({profileImageUploaded:!0,profileImage:t.target.files[0]},(function(){return e.upload(e.state.profileImage)}))},e.uploadGallery=function(t){e.setState({upload:!0}),t.target.files[0].type.includes("video")?e.setState({galleryVideoUploaded:!0,galleryVideo:t.target.files[0]},(function(){return e.upload(e.state.galleryVideo)})):e.setState({galleryImageUploaded:!0,galleryImage:t.target.files[0]},(function(){return e.upload(e.state.galleryImage)}))},e.upload=function(t){var a=e.state.database.collection("uniqueId").doc().id;e.state.storage.ref(e.state.upload?e.state.galleryImageUploaded?"".concat(e.props.user.uid,"-galleryImages/").concat(a):"".concat(e.props.user.uid,"-galleryVideos/").concat(a):"".concat(e.props.user.uid,"-profileImage/profileImage")).put(t).on("state_changed",(function(t){var a=Math.round(t.bytesTransferred/t.totalBytes*100);e.setState({progress:a})}),(function(e){console.log(e)}),(function(){e.state.storage.ref(e.state.upload?e.state.galleryImageUploaded?"".concat(e.props.user.uid,"-galleryImages"):"".concat(e.props.user.uid,"-galleryVideos"):"".concat(e.props.user.uid,"-profileImage")).child(e.state.upload?(e.state.galleryImageUploaded,"".concat(a)):"profileImage").getDownloadURL().then((function(t){e.state.profileImageUploaded?e.setState({profileImage:e.state.profileImageUploaded?t:null,profileImageUploaded:!1}):e.state.galleryImageUploaded?(e.props.userUploadedImageToDisplay(t),e.setState({galleryImageUploaded:!1})):(e.props.userUploadedVideoToDisplay(t),e.setState({galleryVideoUploaded:!1}))}))}))},e.signOut=function(){e.state.auth.signOut(),e.state.auth.onAuthStateChanged((function(t){console.log(t),t||(e.setState({user:null}),window.location.reload(!1))}))},e.state={storage:f.storage(),database:f.firestore(),auth:f.auth(),progress:0,upload:!1,profileImage:null,galleryImage:null,galleryVideo:null,profileImageUploaded:!1,galleryImageUploaded:!1,galleryVideoUploaded:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper headerFlexContainer"},s.a.createElement("div",{className:"profileImage"},s.a.createElement("label",{htmlFor:"profileImageUpload"},s.a.createElement("img",{src:this.state.profileImage?this.state.profileImage:this.props.profileImage,alt:"profile"})),s.a.createElement("input",{id:"profileImageUpload",type:"file",onChange:this.uploadProfileImage})),s.a.createElement("div",{className:"userInfo"},s.a.createElement("h1",null,this.props.user.email),s.a.createElement("div",{className:"progressBar"},s.a.createElement("span",{style:{width:"".concat(this.state.progress,"%")}})),s.a.createElement("div",{className:"uploadAndSignOutButtons"},s.a.createElement("p",null,this.props.userImages.length," posts"),s.a.createElement("label",{htmlFor:"fileUpload"},"upload"),s.a.createElement("input",{id:"fileUpload",type:"file",onChange:this.uploadGallery}),s.a.createElement(h.b,{to:"/changmoSungReactProjectFive/",onClick:this.signOut,className:"signOut"},"sign out")))))}}]),t}(n.Component)),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).setBio=function(t){t.preventDefault();var a=e.state.database.collection(e.state.user.uid).doc().id,n=e.state.title.current.value,s=e.state.bio.current.value;e.state.database.collection(e.state.user.uid).doc(a).set({title:n,bio:s,id:a}),e.state.title.current.value="",e.state.bio.current.value=""},e.deleteBio=function(t){if(window.confirm("are you sure?")){var a=t.target.parentNode.id;e.state.database.collection(e.state.user.uid).onSnapshot((function(t){var n=Object(i.a)(e.state.userBios).filter((function(e){return e.id!==a}));e.setState({userBios:n})})),e.state.database.collection(e.state.user.uid).doc(a).delete()}},e.state={auth:f.auth(),database:f.firestore(),user:null,userBios:[],title:s.a.createRef(),bio:s.a.createRef()},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.auth.onAuthStateChanged((function(t){t&&e.setState({user:t},(function(){e.state.database.collection(e.state.user.uid).onSnapshot((function(t){var a=Object(i.a)(e.state.userBios);t.docChanges().forEach((function(e){a.unshift(e.doc.data())})),e.setState({userBios:a})}))}))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"bioSection"},s.a.createElement("form",{onSubmit:this.setBio,className:"bioForm"},s.a.createElement("label",{htmlFor:"title"},"Title"),s.a.createElement("input",{type:"text",id:"title",ref:this.state.title,required:!0}),s.a.createElement("label",{htmlFor:"bio"},"Bio"),s.a.createElement("input",{type:"textarea",id:"bio",ref:this.state.bio,cols:"10",required:!0}),s.a.createElement("button",null,"add to bio")),s.a.createElement("div",{className:"bioContainer"},this.state.userBios.map((function(t,a){return s.a.createElement("div",{key:a,id:t.id,className:"bio"},s.a.createElement("h3",null,t.title),s.a.createElement("p",null,t.bio),s.a.createElement("button",{onClick:e.deleteBio},"Delete"))}))))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).enlargeImage=function(e){e.target.parentNode.classList.toggle("enlarged")},e.state={},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("main",{className:"gallery"},s.a.createElement("div",{className:"links"},s.a.createElement(h.b,{to:"/changmoSungReactProjectFive/"},s.a.createElement("i",{className:"far fa-image"})),s.a.createElement(h.b,{to:"/changmoSungReactProjectFive/video"},s.a.createElement("i",{className:"fas fa-video"})),s.a.createElement(h.b,{to:"/changmoSungReactProjectFive/bio"},s.a.createElement("i",{className:"fas fa-book"}))),s.a.createElement("ul",{className:"wrapper"},s.a.createElement(b.a,{path:"/changmoSungReactProjectFive/",exact:!0},this.props.userImages.map((function(t,a){return s.a.createElement("li",{key:a,className:"galleryImage",tabIndex:"0"},s.a.createElement("img",{src:t,alt:"user uploaded",onClick:e.enlargeImage}),s.a.createElement("button",{onClick:e.props.deleteImage},"delete"))}))),s.a.createElement(b.a,{path:"/changmoSungReactProjectFive/video",exact:!0},this.props.userVideos.map((function(t,a){return s.a.createElement("li",{key:a,className:"galleryImage",tabIndex:"0"},s.a.createElement("video",{src:t,alt:"user uploaded",controls:"controls",onClick:e.enlargeImage}),s.a.createElement("button",{onClick:e.props.deleteVideo},"delete"))}))),s.a.createElement(b.a,{path:"/changmoSungReactProjectFive/bio",component:E})))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).signIn=function(t){t.preventDefault();var a=e.state.signInEmail.current.value,n=e.state.signInPassword.current.value;e.state.auth.signInWithEmailAndPassword(a,n).catch((function(e){var t=e.message;alert(t)})),e.state.auth.onAuthStateChanged((function(t){t&&e.setState({user:t},(function(){e.props.userInfo(t)}))}))},e.signUp=function(t){t.preventDefault();var a=e.state.signUpEmail.current.value,n=e.state.signUpPassword.current.value;e.state.auth.createUserWithEmailAndPassword(a,n).catch((function(e){var t=e.message;alert(t)})),e.state.auth.onAuthStateChanged((function(t){e.setState({user:t,signUpButtonClicked:!e.state.signUpButtonClicked})}))},e.signUpPopUp=function(){e.setState({signUpButtonClicked:!e.state.signUpButtonClicked})},e.state={user:null,signUpButtonClicked:!1,auth:f.auth(),signInEmail:s.a.createRef(),signInPassword:s.a.createRef(),signUpEmail:s.a.createRef(),signUpPassword:s.a.createRef()},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"landingPage"},s.a.createElement("form",{className:"signInForm",onSubmit:this.signIn},s.a.createElement("label",{htmlFor:"signInEmail"},"Email"),s.a.createElement("input",{ref:this.state.signInEmail,id:"signInEmail",type:"email"}),s.a.createElement("label",{htmlFor:"signInPassword"},"Password"),s.a.createElement("input",{ref:this.state.signInPassword,id:"signInPassword",type:"password"}),s.a.createElement("button",null,"Login")),this.state.signUpButtonClicked?s.a.createElement("form",{onSubmit:this.signUp},s.a.createElement("label",{htmlFor:"signUpEmail"},"Email"),s.a.createElement("input",{ref:this.state.signUpEmail,id:"signUpEmail",type:"email"}),s.a.createElement("label",{htmlFor:"signUpPassword"},"Password"),s.a.createElement("input",{ref:this.state.signUpPassword,id:"signUpPassword",type:"password"}),s.a.createElement("button",null,"Sign up"),s.a.createElement("span",{onClick:this.signUpPopUp},"X")):null,this.state.signUpButtonClicked?null:s.a.createElement("button",{onClick:this.signUpPopUp},"Sign up"))}}]),t}(n.Component),U=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).userUploadedImageToDisplay=function(t){var a=Object(i.a)(e.state.userImages);a.unshift(t),e.setState({userImages:a})},e.userUploadedVideoToDisplay=function(t){var a=Object(i.a)(e.state.userVideos);a.unshift(t),e.setState({userVideos:a})},e.deleteImage=function(t){if(window.confirm("are you sure?")){var a=Object(i.a)(e.state.userImages),n=t.target.parentNode.childNodes[0].currentSrc,s=a.filter((function(e){return e!==n}));e.setState({userImages:s}),e.state.storage.refFromURL(n).delete()}},e.deleteVideo=function(t){if(window.confirm("are you sure?")){var a=Object(i.a)(e.state.userVideos),n=t.target.parentNode.childNodes[0].currentSrc,s=a.filter((function(e){return e!==n}));e.setState({userVideos:s}),e.state.storage.refFromURL(n).delete()}},e.state={database:f.firestore(),storage:f.storage(),auth:f.auth(),user:null,userImages:[],userVideos:[],profileImage:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.auth.onAuthStateChanged((function(t){t&&e.setState({user:t},(function(){var t=Object(i.a)(e.state.userImages),a=Object(i.a)(e.state.userVideos);e.state.storage.ref().child("".concat(e.state.user.uid,"-galleryImages")).listAll().then((function(a){a.items.map((function(a){a.getDownloadURL().then((function(a){t.push(a),e.setState({userImages:t})}))}))})),e.state.storage.ref().child("".concat(e.state.user.uid,"-galleryVideos")).listAll().then((function(t){t.items.map((function(t){t.getDownloadURL().then((function(t){a.push(t),e.setState({userVideos:a})}))}))})),e.state.storage.ref().child("".concat(e.state.user.uid,"-profileImage")).listAll().then((function(t){t.items.map((function(t){t.getDownloadURL().then((function(t){console.log(t),e.setState({profileImage:t})}))}))}))}))}))}},{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement("div",null,s.a.createElement(b.a,{path:"/changmoSungReactProjectFive/"},this.state.user?s.a.createElement("div",{className:"root"},s.a.createElement(I,{user:this.state.user,userImages:this.state.userImages,profileImage:this.state.profileImage,profileVideo:this.state.profileVideo,userUploadedImageToDisplay:this.userUploadedImageToDisplay,userUploadedVideoToDisplay:this.userUploadedVideoToDisplay}),s.a.createElement(v,{userImages:this.state.userImages,userVideos:this.state.userVideos,deleteImage:this.deleteImage,deleteVideo:this.deleteVideo})):s.a.createElement(y,{userInfo:this.userInfo}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.a15707ea.chunk.js.map