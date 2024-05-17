import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCKSjTh5r4Xks_j2f0n6V71pK_yehgmaVA",
    authDomain: "vue-blog-system-942cd.firebaseapp.com",
    projectId: "vue-blog-system-942cd",
    storageBucket: "vue-blog-system-942cd.appspot.com",
    messagingSenderId: "836971575511",
    appId: "1:836971575511:web:ae16ed350c5057051b1892"
  };
firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp
export {db,timestamp}