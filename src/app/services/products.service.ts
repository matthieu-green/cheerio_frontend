import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Product } from '../models/product.model';
import { OnInit } from "@angular/core";
import {Observable} from 'rxjs';


import {ProcessHTTPMsgService} from './process-httpmsg.service';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import { baseUrl } from "../baseurl";

@Injectable()

export class ProductService implements OnInit{

  imageUrl: string;
  price: string;
  inCart: boolean;

  ngOnInit(){
  }

constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) {}



getProducts(): Observable<any>{
  return this.http.get(baseUrl + 'products')
  .catch(error => { return this.processHTTPMsgService.handleError(error); });

}

getProduct(id: string): Observable<any>{
  return this.http.get(baseUrl + 'products/' +id)
  .catch(error => { return this.processHTTPMsgService.handleError(error);});
}

postProduct(product: any): Observable<any> {
  return this.http.post(baseUrl + 'products',
    {"title": product.title, "imageName": product.file, "price": product.price, "description": product.description, "author": product.author,
  "language": product.language, "synopsis": product.synopsis, "isbn": product.isbn, "category": product.category})
    .map(res => {
        return {'success': true};
    })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

editProduct(product: any, id: string): Observable<any> {
  return this.http.put(baseUrl + 'products/' + id,
    {"id": product.id, "title": product.title, "imageName": product.file,"imageName2": product.file2, "imageName3": product.file3, "imageName4": product.file4, "price": product.price, "description": product.description,
  "connectivity": product.connectivity, "touchScreen": product.touchScreen, "payment": product.payment})
    .map(res => {
        return {'success': true};
    })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

deleteProduct(id: string): Observable<any>{
  return this.http.delete(baseUrl + 'products/' + id)
  .catch(error => { return this.processHTTPMsgService.handleError(error); });

}


getImage(id : string): Observable<any>{
  return this.http.get(baseUrl + 'images/' +id)
  .catch(error => { return this.processHTTPMsgService.handleError(error); });
}









}
