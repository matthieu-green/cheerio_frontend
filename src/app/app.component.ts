import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import  {ContactService}  from './services/contact.service';
import { Contact } from './models/contact.model'
import { Product } from './models/product.model'
import * as $ from 'jquery';
import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
import { ProductService } from './services/products.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  @ViewChild("map") mapElement;
  map: any;

  auth = false;
  admin = false;
  name: string;
  products: Product[];
  errMess1: string;



//Start animation values
anim = "false";
animationDone = false;
op = 0;
opacity = 0;
top = "0px";
user = {username: '', password: '', address: '', name: ''};
user1 = {username: '', password: ''};

contact = {firstName: '', lastName: '', email: '', phone: '', company:'', message: ''};
errMess: string;

//theme Color
color = "rgb(8, 100, 19)";


//Hover SideNav
width1 = "0px";
width2 = "0px";
width3 = "0px";
width4 = "0px";
width5 = "0px";

//Login or Signup
signup = false;
signupSuccess = false;

//Signup
emailProblem = false;

//name color depending on admin or not
nameColor = "green";


false = "false";

constructor (private contactService: ContactService, private authService: AuthService, private productService: ProductService){}

ngOnInit(){

  //get the products in array
  this.productService.getProducts()
    .subscribe(products => this.products = products,
    errmess => this.errMess1 = <any>errmess);

  //check token validity
  this.authService.checkJWTtoken();

  //stay logged in between reloads
  if(localStorage.getItem('token')){
    this.auth = true;
    this.name = localStorage.getItem('name');
  }else{
    this.auth = false;
  }

  //check if user is admin
  if(localStorage.getItem('admin') == 'true'){
    this.admin = true;
    this.nameColor = "red";
  }else{
    this.admin = false;
    this.nameColor = "green";
  }

  //Start animation or NOT
  this.anim = localStorage.getItem('animationDone');
  if(this.anim == "true"){
    this.animationDone = true;
  }else{
    this.animationDone = false;
  }

  //starting animation
  if(this.anim != 'true'){
    setTimeout(()=>{
      this.top = "-800px"
      setTimeout(()=>{
        this.anim = "true";
        localStorage.setItem('animationDone', this.anim);
        this.animationDone = true;
      }, 500)
      setTimeout(()=>{
        this.opacity = 1;
      }, 600)
    }, 1000);
    setTimeout(()=>{
      this.op = 1;
    }, 50);
  }else{
    this.opacity = 1;
  }

}

onSubmit() {
  this.signupSuccess = false;
  this.authService.logIn(this.user1)
    .subscribe(res => {
      if (res.success) {
        //stay connected through page reloads
        this.auth = true;
        if(res.admin){
          this.admin = true;
        }
        this.name = res.name;
      }
      else {
        console.log(res);
        alert(res);
      }
    },
    error => {
      console.log(error);
      this.errMess = error
    })
}

onSignup(){
  console.log(this.user);
  const m = document.getElementById('username1');
  const mV = document.getElementById('emailConfirm');
  const mail = m.toString();
  const mailVerif = mV.toString();
  if( mail == mailVerif){
    this.emailProblem = false;
    mV.classList.add('valid');
    this.authService.signUp(this.user)
      .subscribe(res => {
        if(res.success) {
          console.log('success');
          this.signup = false;
          this.signupSuccess = true;
          this.name = this.user.name;
        }
        else {
          console.log(res);
          alert(res);
        }
      },
      error => {
        console.log(error);
        this.errMess = error
      })
  }else{
    this.emailProblem = true;
    mV.classList.add('invalid');
    return null;
  }
}

//logout

logOut() {
    this.auth = false;
    this.errMess = undefined;
    this.authService.logOut();
    window.location.reload();
}

//reload page when sign in modal closed
reload(){
  window.location.reload();
}



//initialise google maps
initMap(){
  const coords = new google.maps.LatLng(48.839191, 2.284871);
  let mapOptions: google.maps.MapOptions = {
    center: coords,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  const marker: google.maps.Marker = new google.maps.Marker({
    map: this.map,
    position: coords,
    title: 'E-thik Corporate'
  })
}

//check if the sign up email are the same
checkEmail(){
  const m = document.getElementById('username1');
  const mV = document.getElementById('emailConfirm');
  const mail = m.toString();
  const mailVerif = mV.toString();
  if(mail === mailVerif){
    alert('coincident')
    mV.classList.add('valid');
    mV.classList.remove('invalid');
  }else{
    mV.classList.add('invalid');
    mV.classList.remove('valid');

  }
}


//Sign Up button
signUpButton(){
this.signup = true
}

//Log In button
loginButton(){
this.signup = false
}

onHover1(){
  const w = $('#home').width();
  this.width1 = w.toString() + "px";
}
onLeave1(){
  this.width1 = "0px";
}
onHover2(){
  const w = $('#tintin').width();
  this.width2 = w.toString() + "px";
}
onLeave2(){
  this.width2 = "0px";
}
onHover3(){
  const w = $('#gaston').width();
  this.width3 = w.toString() + "px";
}
onLeave3(){
  this.width3 = "0px";
}
onHover4(){
  const w = $('#spirou').width();
  this.width4 = w.toString() + "px";
}
onLeave4(){
  this.width4 = "0px";
}
onHover5(){
  const w = $('#astérix').width();
  this.width5 = w.toString() + "px";
}
onLeave5(){
  this.width5 = "0px";
}







}
