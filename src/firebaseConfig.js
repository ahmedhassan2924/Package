// firebaseConfig.js
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore } = require('firebase/firestore');

let firebaseApp;
let firebaseAuth;
let firestoreDb;

// Function to initialize Firebase
const initializeFirebase = (config) => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(config);
    firebaseAuth = getAuth(firebaseApp);
    firestoreDb = getFirestore(firebaseApp);
  }
};

// Get Firebase Auth instance
const getFirebaseAuth = () => {
  if (!firebaseAuth) throw new Error('Firebase has not been initialized');
  return firebaseAuth;
};

// Get Firestore instance
const getFirestoreDb = () => {
  if (!firestoreDb) throw new Error('Firebase has not been initialized');
  return firestoreDb;
};

module.exports = {
  initializeFirebase,
  getFirebaseAuth,
  getFirestoreDb,
};

