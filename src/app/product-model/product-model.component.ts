import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component'
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-model',
  templateUrl: './product-model.component.html',
  styleUrls: ['./product-model.component.scss']
})
export class ProductModelComponent implements OnInit {

  @Input() title: string;
  mLeft = '0px';

  constructor(private homePageComponent: HomePageComponent) { }

  ngOnInit() {

    const time = setInterval(()=>{
      this.mLeft = this.homePageComponent.mLeftOther;
    },50)

  }

}
