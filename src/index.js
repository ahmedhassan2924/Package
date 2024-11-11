const { initializeFirebase, getFirebaseAuth, getFirestoreDb } = require('./firebaseConfig');
const { getCollectionData, getDocumentById, addDocument, updateDocument, deleteDocument } = require('./firestoreService');

module.exports = {
  initializeFirebase,
  getFirebaseAuth,
  getFirestoreDb,
  getCollectionData,
  getDocumentById,
  addDocument,
  updateDocument,
  deleteDocument,
};
