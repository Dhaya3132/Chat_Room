import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs, addDoc} from 'firebase/firestore';

const firebaseConfig = {
    
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
            chatroom.push({...doc.data()})
        )
        // console.log(chatroom);
    }
).catch(
    (err)=>{ console.log(err);
});
 

//Chatroom class

class Chatroom{
    constructor(room, username){
      this.room = room;
      this.username = username;
      this.chats = collectionref;
    }
    async addchat(message)
    {
        // const now = new Date();
        const chat = {
            message,
            room: this.room,
            username: this.username
            // created_at: firebase.firestore.Timestamp.fromDate(now)
        };


        const response_data = addDoc(this.chats, chat);
        return response_data;
    }
}
  
  const chatrooom = new Chatroom('general','dhayaa');
//   console.log(chatrooom);

  chatrooom.addchat('hello everyone').then(()=> console.log('chat addedd'));