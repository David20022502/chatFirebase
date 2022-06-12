import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chat } from '../chatClass';
import { FireChatService } from '../services/fire-chat.service';



@Component ({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  
  Chat: Chat[];
  public chatForm: FormGroup;

  constructor(private chatService: FireChatService, public formBuilder: FormBuilder) {
    this.chatForm= this.formBuilder.group({
      user:[''],
      sms:[''],
      id: null
    })
  }

  mensajesShow(){
    this.chatService.getMessages().subscribe((res) =>{
      this.Chat = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Chat)
        };
      });
    });
  }

  onSubmit(){
    this.chatService.messageCreate(this.chatForm.value);
  }

}
