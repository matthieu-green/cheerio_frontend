import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { ProductDetailComponent } from '../product-detail/product-detail.component'
import { ProductService } from '../services/products.service'
import { AuthService } from '../services/auth.service'
import { ContactService } from '../services/contact.service'
import {AgmCoreModule } from '@agm/core'
import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
import { baseUrl } from '../baseurl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild("map") mapElement;
  map: any;


  //theme color
  color = "rgb(8, 100, 19)";

  //product Arrays
  products = []
  tintins = []
  asterixs = []

  contact = {firstName: '', lastName: '', email: '', phone: '', company:'', message: ''};

  errMess: string;

//Product Slider
  leftOther = 0;
  left1 = 0;
  left2 = 0;
  mLeftOther = "0px";
  mLeftTintin = "0px";
  mLeftAsterix = "0px";

  //Product added message
  cart = false;
  inCart = "false";
  op1 = 0;
  mTop = "-50px";
  imageCart: string;
  priceCart: string;

  //Product Click
  op2 = 0;
  tp = "-400px";

  //background image
  wallpaper: string;
  startTop = "300px";
  opacity = 0;

  constructor(private appComponent: AppComponent, private productDetailComponent: ProductDetailComponent, private productService: ProductService, private authService: AuthService, private contactService: ContactService, private router: Router) { }

  ngOnInit() {

    //get products
    this.productService.getProducts()
      .subscribe(products => this.products = products,
      errmess => this.errMess = <any>errmess);
      this.products.reverse

      //check login status
      this.authService.checkJWTtoken();

      //divide products into categories
      setTimeout(()=>{
        for(var i = 0; i<this.products.length; i++){
          if(this.products[i].category == "tintin"){
            this.tintins.push(this.products[i]);
          }else if(this.products[i].category == "asterix"){
            this.asterixs.push(this.products[i])
          }
        }
      }, 500);

      //wallpaper
      this.wallpaper = "url(" + baseUrl + "images/wallpaper.png)";

    //check if a new product was added to the cart
    this.inCart = localStorage.getItem('inCart');
    this.imageCart = localStorage.getItem('imageCart');
    this.priceCart = localStorage.getItem('priceCart');

      if(this.inCart == "true"){
        this.cart = true;
        setTimeout(()=>{
          this.op1 = 1;
          this.mTop = "30px";
        }, 50);
        setTimeout(()=>{
          this.op1 = 0;
          this.mTop = "-80px";
          setTimeout(()=>{
            this.inCart = "false";
            this.cart = false;
            localStorage.setItem('inCart', this.inCart);
            this.productService.imageUrl = '';
            this.productService.price = '';
          }, 800);
        }, 10000);
      }


    //page transition test
    setTimeout(()=>{
      this.opacity = 1;
      this.startTop = "0px"
    }, 100)

    //Google maps
    this.initMap();



  }


  onClickTintin(){
    if(this.left1 > -540){
      this.left1 = this.left1 - 270;
      this.mLeftTintin = this.left1.toString() + "px";
    }else{
      this.left1 = 0;
      this.mLeftTintin = "0px";
    }
  }
  onClickAsterix(){
    if(this.left2 > -540){
      this.left2 = this.left2 - 270;
      this.mLeftAsterix = this.left2.toString() + "px";
    }else{
      this.left2 = 0;
      this.mLeftAsterix = "0px";
    }
  }

  //Buton to send message
  onSubmit(){
      this.contactService.postContact(this.contact)
        .subscribe(res => {
          if (res.success) {
            alert('Message Sent!');
          }
          else {
            console.log(res);
          }
        },
        error => {
          console.log(error);
          this.errMess = error
        })
  }

  //initialise google maps
  initMap(){
    const coords = new google.maps.LatLng(48.8568175, 2.2723135);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords,
      title: 'Comic Store'
    })
  }

  //page transition
  pTransition(id: string){
    this.startTop = "-1000px";
    this.opacity = 0;
    setTimeout(()=>{
      this.router.navigate(['livres/' + id]);
    }, 500)
}




}
