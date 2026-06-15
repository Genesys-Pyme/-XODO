import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDNy8TlOgUHyGBzax5_kUcgdnTfAL-VNBs",
  authDomain: "exodo-pagina.firebaseapp.com",
  projectId: "exodo-pagina",
  storageBucket: "exodo-pagina.firebasestorage.app",
  messagingSenderId: "1081410589306",
  appId: "1:1081410589306:web:e9ca095e2f22a25b12e1c3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);