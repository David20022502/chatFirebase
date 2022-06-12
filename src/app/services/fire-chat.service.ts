import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Chat } from '../chatClass';

@Injectable({
  providedIn: 'root'
})
export class FireChatService {

  
  chatCollection: AngularFirestoreCollection<Chat>;

  constructor(private angularFirestore: AngularFirestore) {
    this.chatCollection= angularFirestore.collection("mensajes");
   }

   getMessages(){
    return this.chatCollection
    .snapshotChanges();
   }

   messageCreate(message: Chat){
    const id = this.angularFirestore.createId();
    this.chatCollection
    .doc(id)
    .set({
      id,
      user: message.user,
      sms: message.sms
    })

   }
}
