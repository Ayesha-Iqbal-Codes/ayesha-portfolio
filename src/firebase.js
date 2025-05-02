import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDkUZ1gFjc_d4iqTFIsiUqKw6FWqbXWRU",
  authDomain: "contact-form-portfolio-8217e.firebaseapp.com",
  projectId: "contact-form-portfolio-8217e",
  storageBucket: "contact-form-portfolio-8217e.firebasestorage.app",
  messagingSenderId: "495077908073",
  appId: "1:495077908073:web:1b3886f885b04934eaccf8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
