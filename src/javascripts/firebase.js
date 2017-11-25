import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyB_AvOOVn3rLw4wPceWNzZzthzjhY0n-sU",
    authDomain: "smartlab-sandbox.firebaseapp.com",
    databaseURL: "https://smartlab-sandbox.firebaseio.com",
    storageBucket: "smartlab-sandbox.appspot.com",
    messagingSenderId: "864127654342"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}