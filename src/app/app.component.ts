import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactService } from './services/contact.service';
import { Contact } from './contact';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactCardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'assignment-4';
  contactService = inject(ContactService);
   contacts: Contact[] = [];
   editID: number | null = null;


  contact: Contact = {
    id: 0,
    firstname: '',
    lastname: '',
    phone: 0,
    email: ''
  };

   ngOnInit() {
    this.contacts = this.contactService.getContacts();
   }

   addContact(){
    this.contactService.addContact(this.contact);
    this.refresh();
   }

   updateContact(){
    this.contactService.updateContact(this.contact);
    this.refresh();
   }

   deleteContact(con: Contact){
    this.contactService.deleteContact(con);
    this.refresh();
   }

   editContact(con: Contact){
    this.contact = {... con};
    this.editID = con.id;
   }

   reset() {
    this.contact = {
      id: 0,
      firstname: '',
      lastname: '',
      phone: 0,
      email: ''
    };
    this.editID = null;
   }
 
   refresh(){
    this.contacts = this.contactService.getContacts();
    this.reset();
   }



}
