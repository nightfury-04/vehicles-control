import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import { FirebaseConfig } from './keys'

firebase.initializeApp(FirebaseConfig)

const auth = firebase.auth()
const storage = firebase.storage()
const db = firebase.firestore()

const vehiclesRef = db.collection('vehicles')

const FIREBASE_AUTH_PERSIST = firebase.auth.Auth.Persistence.LOCAL

export { auth, FIREBASE_AUTH_PERSIST, storage, vehiclesRef }
