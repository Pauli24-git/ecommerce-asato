import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAiaeHoR1GzeYaUOf93uDZeTnuSm-UWtBk",
  authDomain: "ecommerce-asato.firebaseapp.com",
  projectId: "ecommerce-asato",
  storageBucket: "ecommerce-asato.appspot.com",
  messagingSenderId: "804677167123",
  appId: "1:804677167123:web:67a10309bf0121e204f7e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
