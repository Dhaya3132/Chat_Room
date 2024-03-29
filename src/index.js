import { initializeApp } from 'firebase/app';

import { getFirestore, collection, addDoc} from 'firebase/firestore';

const firebaseConfig = {
    
};

initializeApp(firebaseConfig);

const db = getFirestore(); 

const collectionReference = collection(db, 'chat_room');

//adding document to the firebase.
const newchat = document.querySelector('.new-chat');
newchat.addEventListener("submit",(e)=>
{
    e.preventDefault();
    addDoc(collectionReference, {
        Message:newchat.message.value,
        Username:newchat.name.value,
    })
    newchat.reset()
    addingchat();
});

//getting document from fire.


//adding to screen UI



