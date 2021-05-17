import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLKndhDX3QnTY67jRlSkGkosBS-mKy7so",
    authDomain: "bate-papo-814de.firebaseapp.com",
    projectId: "bate-papo-814de",
    storageBucket: "bate-papo-814de.appspot.com",
    messagingSenderId: "113426848545",
    appId: "1:113426848545:web:e605a7cdac19ad9c277c60"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;