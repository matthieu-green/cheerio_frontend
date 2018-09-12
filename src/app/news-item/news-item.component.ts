import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() date: string;
  @Input() description: string;
  @Input() category: string;
  @Input() image: string;
  @Input() index: number;

  hacker = false;
  monde = false;
  equipe = false;
  tech = false;
  economist = false;
  wired = false;
  wallstreet = false;
  radar = false;
  bbc = false;
  search = true;
  imageVerif = false;

  constructor(private newsComponent: NewsComponent) { }

  ngOnInit() {

    console.log(this.index);

    if(this.category == "hacker-news"){
      this.hacker = true;
    }else if (this.category == "techcrunch"){
      this.tech = true;
    }else if (this.category == "le-monde"){
      this.monde = true;
    }else if(this.category == "lequipe"){
      this.title.replace("s&#039;impose", "s'impose");
      this.equipe = true;
    }else if(this.category == "the-economist"){
      this.economist = true;
    }else if(this.category == "the-wall-street-journal"){
      this.wallstreet = true;
    }else if(this.category == "wired"){
      this.wired = true;
    }else if(this.category == "techradar"){
      this.radar = true;
    }else if(this.category == "bbc-news"){
      this.bbc = true;
    }

    if(this.image == null){
      this.imageVerif = false;
    }else{
      this.imageVerif = true;
    }


    setInterval(()=>{
        if(this.category == "hacker-news" && this.newsComponent.checkHacker == true || this.category == "techcrunch" && this.newsComponent.checkTech == true || this.category == "le-monde" && this.newsComponent.checkMonde == true ||
      this.category == "lequipe" && this.newsComponent.checkEquipe == true || this.category == "the-economist" && this.newsComponent.checkEconomist == true || this.category == "the-wall-street-journal" && this.newsComponent.checkWallstreet == true ||
    this.category == "wired" && this.newsComponent.checkWired == true || this.category == "techradar" && this.newsComponent.checkTechRadar == true|| this.category == "bbc-news" && this.newsComponent.checkBBC == true ){
          if(this.newsComponent.search != "" && this.newsComponent.search != undefined){
            if(this.title.toLowerCase().includes(this.newsComponent.search.toLowerCase()) || this.description != null && this.description.toLowerCase().includes(this.newsComponent.search.toLowerCase())){
              this.search = true;
            }else{
              this.search = false;
            }
          }else{
            this.search = true;
          }
      }else{
        this.search = false;
      }

    })
  }

}
