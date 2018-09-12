import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService} from '../services/products.service'
import { Product } from '../models/product.model'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';
import{ FileUploader, FileSelectDirective } from 'ng2-file-upload'
import { baseUrl } from '../baseurl'
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../services/auth.service'


import {ProcessHTTPMsgService} from '../services/process-httpmsg.service';






@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  products: Product[];
  product = {title: '', price: 0, description:'', file: '', author: '', isbn: '', language: '', synopsis: '', category: ''}

  errMess: string;

  selectedFile: File = null;

  marginTop = "300px"

  constructor(private router: Router, private productService: ProductService,  private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService, private authService: AuthService) { }


  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => this.products = products,
      errmess => this.errMess = <any>errmess);

      this.authService.checkJWTtoken();

      setTimeout(()=>{
        this.marginTop = "0px"
      })

  }



  onSubmit(){
    if(confirm("Etes-vous sûr de vouloir ajouter ce nouveau produit?")){
      this.uploadImage();
      if(this.selectedFile){
        this.product.file = this.selectedFile.name;
      }
      this.productService.postProduct(this.product)
        .subscribe(res => {
          if (res.success) {
            alert('Bien enregistré!');
            this.router.navigate(["home"]);
          }
          else {
            console.log(res);
          }
        },
        error => {
          console.log(error);
          this.errMess = error
        })
    }else{
      return null;
    }
  }



  refresh(){
    setTimeout(()=>{
      location.reload();
    }, 500)
  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }




  uploadImage(){
    const fd = new FormData();
    fd.append('productPhoto', this.selectedFile, this.selectedFile.name);
    this.http.post(baseUrl + "imageUpload", fd)
      .subscribe(res=>{
        console.log(res);
      });
  }

}
