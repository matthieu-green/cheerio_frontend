import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NewsComponent } from '../news/news.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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

  bbcColor = "rgba(186, 28, 34, 0.5)"
  mondeColor = "rgb(254, 198, 46, 0.3)";
  economistColor = "rgba(252, 13, 27, 0.5)"
  techColor = "rgba(23, 158, 25, 0.3)"
  hackerColor = "rgba(252, 102, 33, 0.3)"
  wallstreetColor = "rgba(100, 100, 100, 0.3)"
  equipeColor = "rgba(212, 33, 22, 0.3)"
  radarColor = "rgba(50, 111, 144, 0.3)"
  wiredColor = "rgba(0, 0, 0, 0.6)"

  bbcColor1 = "rgba(186, 28, 34, 0.5)"
  mondeColor1 = "rgb(254, 198, 46, 0.3)";
  economistColor1 = "rgba(252, 13, 27, 0.5)"
  techColor1 = "rgba(23, 158, 25, 0.3)"
  hackerColor1 = "rgba(252, 102, 33, 0.3)"
  wallstreetColor1 = "rgba(100, 100, 100, 0.3)"
  equipeColor1 = "rgba(212, 33, 22, 0.3)"
  radarColor1 = "rgba(50, 111, 144, 0.3)"
  wiredColor1 = "rgba(0, 0, 0, 0.6)"


  mondeUrl = "http://aqua-etiam.com/wp-content/uploads/2015/03/mondefr_ios_app.png";
  economistUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/TheEconomistLogo.svg/2000px-TheEconomistLogo.svg.png"
  techUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png"
  hackerUrl = "https://techcrunch.com/wp-content/uploads/2013/05/hacker-news1.jpg?w=600"
  wallstreetUrl = "https://ff9a085de27ee215499f-d152abb8b8e2f4e12e4b8bb75494773c.ssl.cf1.rackcdn.com/Wall-Street-Journal-Logo.jpg"
  equipeUrl = "https://upload.wikimedia.org/wikipedia/fr/4/4f/Logo_L%27%C3%89quipe_21.svg"
  wiredUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/2000px-Wired_logo.svg.png"
  radarUrl = "http://www.livescribe.com/blog/noteworthy2/wp-content/uploads/2014/01/thesprezz-techradar-logo-white2.png"

  imageUrl: string;
  bckColor: string;
  bColor: string;

  more = false;
  m = false;
  height = "0px"
  top = "0px";
  search = true;
  imageVerif = false;


  constructor(private newsComponent: NewsComponent) { }

  ngOnInit() {

    console.log(this.index);

    if(this.category == "le-monde"){
      this.bckColor = this.mondeColor;
      this.bColor = this.mondeColor1;
      this.imageUrl = this.mondeUrl;
    }else if(this.category == "bbc-news"){
      this.bckColor = this.bbcColor;
      this.bColor = this.bbcColor1;
    }else if(this.category == "lequipe"){
      this.bckColor = this.equipeColor;
      this.bColor = this.equipeColor1;
      this.imageUrl = this.equipeUrl;
    }else if(this.category == "techcrunch"){
      this.bckColor = this.techColor;
      this.bColor = this.techColor1;
      this.imageUrl = this.techUrl;
    }else if(this.category == "techradar"){
      this.bckColor = this.radarColor;
      this.bColor = this.radarColor1;
      this.imageUrl = this.radarUrl;
    }else if(this.category == "the-wall-street-journal"){
      this.bckColor = this.wallstreetColor;
      this.bColor = this.wallstreetColor1;
      this.imageUrl = this.wallstreetUrl;
    }else if(this.category == "the-economist"){
      this.bckColor = this.economistColor;
      this.bColor = this.economistColor1;
      this.imageUrl = this.economistUrl;
    }else if(this.category == "hacker-news"){
      this.bckColor = this.hackerColor;
      this.bColor = this.hackerColor1;
      this.imageUrl = this.hackerUrl;
    }else if(this.category == "wired"){
      this.bckColor = this.wiredColor;
      this.bColor = this.wiredColor1;
      this.imageUrl = this.wiredUrl;
    }

    if(this.image == null || this.image == ""){
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


  moreDetails(){
    this.more = true;
    this.m = true
    setTimeout(()=>{
      this.height = "200px";
      this.top = "-200px";
      setTimeout(()=>{
        this.m = false;
      }, 300)
    })
  }

  less(){
    if(this.m == true){
      return null
    }else{
      this.height = "0px";
      this.top = "0px";
      setTimeout(()=>{
        this.more = false;
      }, 500)
    }
  }


  onTransition(event){
    if(this.more == false){
      window.open(this.url, '_blank')
    }else{
      event.preventDefault();
    }
  }

}
