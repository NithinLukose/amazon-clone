import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDFyUgENP7ekpfwOmSD1Nu2Q2LksK1Jdn8",
    authDomain: "clone-ab3f4.firebaseapp.com",
    databaseURL: "https://clone-ab3f4.firebaseio.com",
    projectId: "clone-ab3f4",
    storageBucket: "clone-ab3f4.appspot.com",
    messagingSenderId: "24405105327",
    appId: "1:24405105327:web:175fcf96be2ef4cbf1125a",
    measurementId: "G-BKH2MDN2Y9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth}