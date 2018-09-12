import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { ProductService } from '../services/products.service';
import { Router } from '@angular/router';
import { baseUrl } from '../baseurl';


@Component({
  selector: 'app-tintin-model',
  templateUrl: './tintin-model.component.html',
  styleUrls: ['./tintin-model.component.scss']
})
export class TintinModelComponent implements OnInit {

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


  imageSource: string;

  mLeft = '0px';
  color: string;

  cardTop = "-80px";

  constructor(private homePageComponent: HomePageComponent, private productService: ProductService, private router: Router) { }

  ngOnInit() {

        const time = setInterval(()=>{
          this.mLeft = this.homePageComponent.mLeftTintin;
        },50)

        this.color = this.homePageComponent.color;

        this.imageSource = baseUrl + "images/" + this.imageName;


      }




      pTransition(id: string){
        localStorage.setItem('imageCart', this.imageSource);
        localStorage.setItem('priceCart', this.price);
        this.homePageComponent.startTop = "-500px";
        this.homePageComponent.opacity = 0;
        setTimeout(()=>{
          this.router.navigate(['livres/' + id]);
        }, 500)
  }


  onHover(){
    this.cardTop = "0px";
  }

  onLeave(){
    this.cardTop = "-80px";
  }

}
