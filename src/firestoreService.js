// firestoreService.js
import { collection, getDocs, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Function to fetch all documents from a collection
export const fetchCollection = async (collectionName) => {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};

// Function to add a new document
export const addDocument = async (collectionName, data) => {
  const colRef = collection(db, collectionName);
  const docRef = await addDoc(colRef, data);
  return docRef.id;
};

// Function to update a document
export const updateDocument = async (collectionName, docId, data) => {
  const docRef = doc(db, collectionName, docId);
  await setDoc(docRef, data, { merge: true });
};

// Function to delete a document
export const deleteDocument = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
};
