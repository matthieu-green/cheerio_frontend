import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Author } from '../models/author.model';
import { OnInit } from "@angular/core";
import {Observable} from 'rxjs';


import {ProcessHTTPMsgService} from './process-httpmsg.service';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import { baseUrl } from "../baseurl";

@Injectable()

export class AuthorService implements OnInit{

  clicked = false;

  ngOnInit(){
  }

constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) {}



getAuthors(): Observable<any>{
  return this.http.get(baseUrl + 'authors')
  .catch(error => { return this.processHTTPMsgService.handleError(error); });

}

getAuthor(id: string): Observable<any>{
  return this.http.get(baseUrl + 'authors/' +id)
  .catch(error => { return this.processHTTPMsgService.handleError(error);});
}

postAuthor(author: any): Observable<any> {
  return this.http.post(baseUrl + 'authors',
    {"name": author.name, "birth": author.birth, "biography": author.biography, "imageName": author.file, "nationality": author.nationality})
    .map(res => {
        return {'success': true};
    })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

editAuthor(author: any, id: string): Observable<any> {
  return this.http.put(baseUrl + 'authors/' + id,
  {"name": author.name, "birth": author.birth, "biography": author.biography, "imageName": author.file, "nationality": author.nationality})
    .map(res => {
        return {'success': true};
    })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

deleteAuthor(id: string): Observable<any>{
  return this.http.delete(baseUrl + 'authors/' + id)
  .catch(error => { return this.processHTTPMsgService.handleError(error); });

}


getImage(id : string): Observable<any>{
  return this.http.get(baseUrl + 'images/' +id)
  .catch(error => { return this.processHTTPMsgService.handleError(error); });
}









}
