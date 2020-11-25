import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyA0EMatx44QJz1LVOfQoQfLQXxNAptOJrc',
  authDomain: 'freedom-64fb3.firebaseapp.com',
  databaseURL: 'https://freedom-64fb3.firebaseio.com',
  projectId: 'freedom-64fb3',
  storageBucket: 'freedom-64fb3.appspot.com',
  messagingSenderId: '1087244690234',
  appId: '1:1087244690234:web:3160eff53e3abc3137a603',
  measurementId: 'G-ZGW55TLWDN'
}

firebase.initializeApp(firebaseConfig)
export default firebase.database()
