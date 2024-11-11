const { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } = require('firebase/firestore');
const { getFirestoreDb } = require('./firebaseConfig');

// Fetch all documents from a collection
const getCollectionData = async (collectionName) => {
  const db = getFirestoreDb();
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Fetch a single document by ID
const getDocumentById = async (collectionName, id) => {
  const db = getFirestoreDb();
  const docRef = doc(db, collectionName, id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return { id: docSnapshot.id, ...docSnapshot.data() };
  } else {
    throw new Error('Document not found');
  }
};

// Add a new document to a collection
const addDocument = async (collectionName, data) => {
  const db = getFirestoreDb();
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};

// Update an existing document
const updateDocument = async (collectionName, id, data) => {
  const db = getFirestoreDb();
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data);
};

// Delete a document by ID
const deleteDocument = async (collectionName, id) => {
  const db = getFirestoreDb();
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};

module.exports = {
  getCollectionData,
  getDocumentById,
  addDocument,
  updateDocument,
  deleteDocument,
};
