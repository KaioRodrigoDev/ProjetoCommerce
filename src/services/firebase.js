import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCTiMYmSDbaPyyLE5uq-RKEmuGS5_cGsZo',
  authDomain: 'jgsport-62096.firebaseapp.com',
  projectId: 'jgsport-62096',
  storageBucket: 'jgsport-62096.appspot.com',
  messagingSenderId: '428323953470',
  appId: '1:428323953470:web:88134926fdc682d68fea6f'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()

export default { firebase, auth }
