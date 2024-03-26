import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs} from 'firebase/firestore';

const firebaseConfig = {

    authDomain: "chat-room-c7c1d.firebaseapp.com",
    projectId: "chat-room-c7c1d",
    storageBucket: "chat-room-c7c1d.appspot.com",
    messagingSenderId: "65973620512",
    appId: "1:65973620512:web:509e39468a4e7943875145",
    measurementId: "G-E84C8Y5HZ3"
  };

initializeApp(firebaseConfig);

const db = getFirestore();

const collectionref = collection(db, 'chat_room');

getDocs(collectionref).then(
    (snapshot)=>
    {
        let chatroom =[]
        snapshot.docs.forEach(
            (doc)=> 
            chatroom.push({...doc.data(), id:doc.id})
        )
        console.log(chatroom);
    }
).catch(
    (err)=>{ console.log(err);
});
 

