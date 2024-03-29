import { initializeApp } from 'firebase/app';

import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {

    

};

initializeApp(firebaseConfig);

const db = getFirestore();

const collectionReference = collection(db, 'chat_room');

//adding document to the firebase.
const newchat = document.querySelector('.new-chat');
newchat.addEventListener("submit", (e) => {
    e.preventDefault();
    addDoc(collectionReference, {
        Message: newchat.message.value,
        Username: newchat.name.value,
    })
    newchat.reset()
});

//getting document from fire.
const chatlist = document.querySelector('.chat-list');
getDocs(collectionReference).then((snapshot) => {
    const datas = [];
    snapshot.docs.forEach((doc) => {
        datas.push({ ...doc.data() })
    })
    datas.forEach((dataui) => {
        const html =
            `
            <li>
                <h5>${dataui.Message}</h5>
                <p>${dataui.Username}</p>
            </li>
       `;

        chatlist.innerHTML += html;

    });
}).catch((err) => {
    console.log(err.Message);
});






