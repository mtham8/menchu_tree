// Initialize Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyDcrYcB3SPkwroMoF0i7q3W-IuXelgpt-Q',
  authDomain: 'menchutree.firebaseapp.com',
  databaseURL: 'https://menchutree.firebaseio.com',
  projectId: 'menchutree',
  storageBucket: 'menchutree.appspot.com',
  messagingSenderId: '671973720221'
}
firebase.initializeApp(firebaseConfig)
var firebase_auth = firebase.auth()
var firebase_db = firebase.database()

firebase_auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    console.log('FB AUTH: sign-in successful')
  } else {
    // No user is signed in.
    console.log('FB AUTH: sign-in unsuccessful')
  }
})
