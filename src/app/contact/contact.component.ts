import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model'
import { Input } from '@angular/core'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
  errMess: string;
  admin = false;

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() phone: number;
  @Input() company: string;
  @Input() message: string;
  @Input() _id: string;


  constructor(private contactService: ContactService, private appComponent: AppComponent) { }

  ngOnInit() {

    this.contactService.getContacts()
    .subscribe(contacts => this.contacts = contacts,
    errmess => this.errMess = <any>errmess);

    this.admin = this.appComponent.admin;


  }

  deleteContact(id : string) {
    if(confirm('Êtes-vous sûr de vouloir supprimer ce contact?')){
        this.contactService.deleteContact(id)
          .subscribe(contacts => this.contacts = contacts,
            errmess => this.errMess = <any>errmess);
    }
    window.location.reload();
  }

}
