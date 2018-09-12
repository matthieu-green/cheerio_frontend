import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/products.service';
import { baseUrl } from '../baseurl';
import { AppComponent } from '../app.component'
import { AuthorService } from '../services/author.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: {imageName: string, author: string, price: string};

  authorList =  [];
  authors = [];

  inCart: string;
  imageUrl: string;
  price: string;

  id: string;
  errMess: string;
  addressColor: string;
  address = "Adresse non renseignée";
  imageSource: string;
  right = "-250px";
  topPosition = "500px";
  topPosition1 = "1000px";
  opacity = 0;

  auth: string;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private appComponent: AppComponent, private authorService: AuthorService) { }

  ngOnInit() {

    //get product with route id parameter
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id)
    .subscribe(product => this.product = product,
      errmess => this.errMess = <any>errmess);

      //get authors list 
    this.authorService.getAuthors()
    .subscribe(authors => this.authorList = authors,
      errmess => this.errMess = <any>errmess);

    setTimeout(()=>{
      for(var i = 0; i< this.authorList.length; i ++){
        if(this.authorList[0].name.toLowerCase() === this.product.author.toLowerCase()){
          this.authors.push(this.authorList[i]);
        }
      }
    }, 100)


    //address appear or not
    if(!localStorage.getItem('name')){
      this.address = "Connectez-vous";
      this.addressColor = "green";
    }else if(localStorage.getItem('address')){
      this.address = localStorage.getItem('address');
      this.addressColor = "green";
    }else{
      this.address = "Adresse non renseignée";
      this.addressColor = "red";
    }

    setTimeout(()=>{
      this.topPosition = "0px";
      this.right = "10px";
      this.opacity = 1;
      this.topPosition1 = "0px"
    }, 500);

  }


  addCart(){
    this.inCart = "true";
    localStorage.setItem('inCart', this.inCart );
    this.router.navigate(['home']);
  }


}
