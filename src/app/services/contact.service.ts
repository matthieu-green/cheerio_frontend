import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Product } from '../models/product.model';
import { OnInit } from "@angular/core";
import {Observable} from 'rxjs';


import {ProcessHTTPMsgService} from './process-httpmsg.service';
import { map, catchError } from 'rxjs/operators';

import 'rxjs/add/operator/catch';
import { baseUrl } from "../baseurl";


@Injectable()
export class ContactService {

contactSubject = new Subject<any[]>();
private contact = [];

constructor (private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) {}



getContacts():Observable<any>{
  return this.http.get(baseUrl + 'contacts')
  .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

postContact(contact: any): Observable<any>{
  return this.http.post(baseUrl + 'contacts',
    {"firstName": contact.firstName, "lastName": contact.lastName, "email": contact.email, "phone": contact.phone, "company": contact.company, "message": contact.message})
    .map(res => {
        return {'success': true};
    })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

deleteContact(id: string): Observable<any>{
  return this.http.delete(baseUrl + 'contacts/' + id)
  .catch(error => {return this.processHTTPMsgService.handleError(error);});
}

}
