import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Author } from '../models/author.model'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';
import{ FileUploader, FileSelectDirective } from 'ng2-file-upload'
import { baseUrl } from '../baseurl'
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../services/auth.service'


import {ProcessHTTPMsgService} from '../services/process-httpmsg.service';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.scss']
})
export class NewAuthorComponent implements OnInit {

  authors: Author[];
  author = {name: '', birth: '', nationality:'', biography: '', file: ''}

  errMess: string;

  selectedFile: File = null;

  marginTop = "300px"


  constructor(private authorService: AuthorService, private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors,
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
        this.author.file = this.selectedFile.name;
      }
      this.authorService.postAuthor(this.author)
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
