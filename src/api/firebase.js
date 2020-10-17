import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSQ_X6rm7LNixFZiDgNvAYI24dz-nZ0M0",
    authDomain: "neighborly-e4b11.firebaseapp.com",
    databaseURL: "https://neighborly-e4b11.firebaseio.com",
    projectId: "neighborly-e4b11",
    storageBucket: "neighborly-e4b11.appspot.com",
    messagingSenderId: "753130655399",
    appId: "1:753130655399:web:d281195e289cf3c2c31582",
    measurementId: "G-61C1RLL4ET"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;