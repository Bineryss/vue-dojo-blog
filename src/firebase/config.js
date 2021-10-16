import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAgBrGBYQNgBuVNJsIf_J53xEMYakJQbPg",
    authDomain: "dojo-blog-firebase-b8ed3.firebaseapp.com",
    projectId: "dojo-blog-firebase-b8ed3",
    storageBucket: "dojo-blog-firebase-b8ed3.appspot.com",
    messagingSenderId: "944065419103",
    appId: "1:944065419103:web:a578d78e2ef59e04fdc8ea"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//Init firestore service
const projectFirestore = app.firestore()

export {projectFirestore}