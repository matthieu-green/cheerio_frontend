import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../baseurl';
import * as $ from 'jquery';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any;
  news1: any;
  errMess: string;
  wait = false;
  search: string;
  lemonde: any;
  lefig: any;
  techCrunch: any;
  hackerNews: any;
  equipe: any;
  monde = true;
  figaro = true;

  checkEquipe = true;
  checkMonde = true;
  checkEconomist = true;
  checkWired = true;
  checkTech = true;
  checkHacker = true;
  checkWallstreet = true;
  checkTechRadar = true;
  checkBBC = true;

  top = "800px"

  w = '';


  constructor(private http: HttpClient) { }

  ngOnInit() {

    setTimeout(()=>{
      let width = $('#preloader').width();
      let windowWidth = $(document).width();
      this.w = (windowWidth/2 - width/2) + "px";
    }, 100)

    this.getNews();
    setInterval(()=>{
      this.getNews1();
    },10000)
  }



  getNews(){
    this.top = "300px"
    this.wait = true;
    this.http.get(baseUrl + "fetch")
      .subscribe(news => {
        this.news = news;
        this.wait = false;
        setTimeout(()=>{
          this.top = "0px"
        }, 1000)
      },
    errmess => this.errMess = <any>errmess);
  }

  getNews1(){
    this.http.get(baseUrl + "fetch")
      .subscribe(news => {
        this.news1 = news;
        this.wait = false;
        if(this.news1[0].title != this.news[0].title){
          this.news = this.news1;
        }
      },
    errmess => this.errMess = <any>errmess);
  }

test(){
  alert(this.checkEquipe)
}


}
