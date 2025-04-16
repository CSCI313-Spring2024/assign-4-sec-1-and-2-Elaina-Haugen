import { Injectable } from '@angular/core';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  private contacts: Contact[] = [];
  private idCount = 1;

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void{
    contact.id = this.idCount++;
    this.contacts.push(contact);
  }

  updateContact(update: Contact): void{
    const index = this.contacts.findIndex(c => c.id === update.id);
    if (index > -1){
      this.contacts[index] = {... update};
    }
  }

  deleteContact(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c.id !== contact.id);
  }
}
