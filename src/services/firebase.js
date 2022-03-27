import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA2UzjHg28XnAeFOzPdrpQ93LcyEJw9uyM',
  authDomain: 'jgsport-e0a51.firebaseapp.com',
  projectId: 'jgsport-e0a51',
  storageBucket: 'jgsport-e0a51.appspot.com',
  messagingSenderId: '1095105242126',
  appId: '1:1095105242126:web:740f96bad5581e7521885f'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()

export { firebase, auth }
