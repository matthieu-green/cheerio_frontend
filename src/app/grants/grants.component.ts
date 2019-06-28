import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GrantsItemComponent} from '../grants-item/grants-item.component'
import { baseUrl } from '../baseurl';
import * as $ from 'jquery';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.scss']
})
export class GrantsComponent implements OnInit {

  grants: any;
  errMess: string;
  wait = false;
  search: string;


  checkCoordSud = true
  checkLuxdev = true
  checkAecid = true

  top = "800px"

  w = '';


  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getGrants();
    // setInterval(()=>{
    //   this.getNews1();
    // },10000)
  }



  getGrants(){
    this.top = "200px"
    this.wait = true;
    this.http.get(baseUrl + "save")
      .subscribe(grants => {
        this.grants = grants;
        this.wait = false;
        this.top = "0px"
        // this.grantsItemComponent.top = 0
      },
    errmess => this.errMess = <any>errmess);
  }

  // getNews1(){
  //   this.http.get(baseUrl + "fetch")
  //     .subscribe(news => {
  //       this.news1 = news;
  //       this.wait = false;
  //       if(this.news1[0].title != this.news[0].title){
  //         this.news = this.news1;
  //       }
  //     },
  //   errmess => this.errMess = <any>errmess);
  // }



}
