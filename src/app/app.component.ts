import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';



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

constructor (){}

ngOnInit(){





}}
