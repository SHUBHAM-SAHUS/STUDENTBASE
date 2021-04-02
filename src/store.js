


import firebase from 'firebase/app'
import 'firebase/auth'
 import 'firebase/firestore' 
import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
 import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' 

const fbConfig = { apiKey: "AIzaSyDFUQtbwSr3gQ5pksMtp1sQl565ck4HlUA",
authDomain: "studentbase-281e8.firebaseapp.com",
projectId: "studentbase-281e8",
storageBucket: "studentbase-281e8.appspot.com",
messagingSenderId: "99890235970",
appId: "1:99890235970:web:e10ac1241446afca717bdb",
measurementId: "G-4KGH6BCFG7"}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
   useFirestoreForProfile:true 
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer 
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

// Setup react-redux so that connect HOC can be used

export default store;