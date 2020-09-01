import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBTmIsp2NbeTxSlwuV-RLaDcfpGKUlVeqU",
    authDomain: "abdu-fb.firebaseapp.com",
    databaseURL: "https://abdu-fb.firebaseio.com",
    projectId: "abdu-fb",
    storageBucket: "abdu-fb.appspot.com",
    messagingSenderId: "801141970252",
    appId: "1:801141970252:web:93c64cc63ce7f46f38ebe9",
    measurementId: "G-3PY6M3SV6Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider };
  export default db;