import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() contact!: Contact;
 
}
