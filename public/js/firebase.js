  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  //import { firestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBh5xDByWH_h6wPdWBbBEWE2BzGCgyAD-g",
    authDomain: "blogging-website-16ef0.firebaseapp.com",
    projectId: "blogging-website-16ef0",
    storageBucket: "blogging-website-16ef0.appspot.com",
    messagingSenderId: "137699961207",
    appId: "1:137699961207:web:7d5ecc4de1de23f97fd972"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let auth = firebase.auth();
  let db = firebase.firestore();


  const logoutUser = ()=>{
    auth.signOut();
    location.reload();
  }