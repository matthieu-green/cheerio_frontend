import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model'
import { ContactService } from '../services/contact.service'
import { AuthService } from '../services/auth.service'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  errMess: string;
  admin = false;

  top = "100px";
  opacity = 0;

  constructor(private contactService: ContactService, private authService: AuthService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((contacts: any[]) =>{ this.contacts = contacts; this.contacts.reverse();},
      errmess => this.errMess = <any>errmess);

      this.authService.checkJWTtoken();

      this.admin = this.appComponent.admin;

      setTimeout(()=>{
        this.top = "0px";
        this.opacity = 1;
      }, 100)


  }

}
