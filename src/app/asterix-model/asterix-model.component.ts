import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { Router } from '@angular/router'
import { ProductService } from '../services/products.service'
import { baseUrl } from '../baseurl';

@Component({
  selector: 'app-asterix-model',
  templateUrl: './asterix-model.component.html',
  styleUrls: ['./asterix-model.component.scss']
})
export class AsterixModelComponent implements OnInit {

  @Input() title: string;
  @Input() category: string;
  @Input() description: string;
  @Input() synopsis: string;
  @Input() language: string;
  @Input() isbn: string;
  @Input() price: string;
  @Input() author: string;
  @Input() imageName: string;
  @Input() _id: string;

  mLeft = '0px';
  color: string;

  imageSource: string;

  cardTop = "-80px";


  constructor(private homePageComponent: HomePageComponent, private router: Router, private productService: ProductService) { }

  ngOnInit() {

        const time = setInterval(()=>{
          this.mLeft = this.homePageComponent.mLeftAsterix;
        },50)

        this.color = this.homePageComponent.color;

        this.imageSource = baseUrl + "images/" + this.imageName;


      }




      pTransition(id: string){
        localStorage.setItem("imageCart", this.imageSource);
        localStorage.setItem("priceCart", this.price);
        this.homePageComponent.startTop = "-500px";
        this.homePageComponent.opacity = 0;
        setTimeout(()=>{
          this.router.navigate(['livres/' + id]);
        }, 600)
  }

  onHover(){
    this.cardTop = "0px";
  }

  onLeave(){
    this.cardTop = "-80px";
  }


}
