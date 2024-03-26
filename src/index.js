import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPx5W45ueJ5BFEIHHq7lNhrGnY2BGKzVA",
    authDomain: "chat-room-c7c1d.firebaseapp.com",
    projectId: "chat-room-c7c1d",
    storageBucket: "chat-room-c7c1d.appspot.com",
    messagingSenderId: "65973620512",
    appId: "1:65973620512:web:509e39468a4e7943875145",
    measurementId: "G-E84C8Y5HZ3"
  };

initializeApp(firebaseConfig);
const db = getFirestore()