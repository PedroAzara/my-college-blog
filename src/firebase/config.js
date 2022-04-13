import firebase from "firebase/app";
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlau_JX3-LXYuNMV7rAkJnQRYF-bk2vN8",
  authDomain: "cursin-udemy.firebaseapp.com",
  projectId: "cursin-udemy",
  storageBucket: "cursin-udemy.appspot.com",
  messagingSenderId: "166082198315",
  appId: "1:166082198315:web:85da010d25993641fda36e"
};

// Initialize Firebase
// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore, timestamp }