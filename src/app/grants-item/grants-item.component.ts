import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { GrantsComponent } from '../grants/grants.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-grants-item',
  templateUrl: './grants-item.component.html',
  styleUrls: ['./grants-item.component.scss']
})
export class GrantsItemComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() validite: string;
  @Input() theme: string;
  @Input() financement: string;
  @Input() source: string;
  @Input() index: number;

  coordSud = "rgb(254, 198, 46, 0.3)"
  luxdev = "rgba(50, 111, 144, 0.3)"


  mondeColor = "rgba(186, 28, 34, 0.5)";
  economistColor = "rgba(252, 13, 27, 0.5)"
  techColor = "rgba(23, 158, 25, 0.3)"
  hackerColor = "rgba(252, 102, 33, 0.3)"
  wallstreetColor = "rgba(100, 100, 100, 0.3)"
  equipeColor = "rgba(212, 33, 22, 0.3)"
  wiredColor = "rgba(0, 0, 0, 0.6)"



  coordSud1 = "rgb(254, 198, 46, 0.3)"
  luxdev1 = "rgba(50, 111, 144, 0.3)"

  mondeColor1 = "rgba(186, 28, 34, 0.5)";
  economistColor1 = "rgba(252, 13, 27, 0.5)"
  techColor1 = "rgba(23, 158, 25, 0.3)"
  hackerColor1 = "rgba(252, 102, 33, 0.3)"
  wallstreetColor1 = "rgba(100, 100, 100, 0.3)"
  equipeColor1 = "rgba(212, 33, 22, 0.3)"
  wiredColor1 = "rgba(0, 0, 0, 0.6)"


  coordSudUrl = "https://www.coordinationsud.org/wp-content/uploads/logo-21-376x282.png";
  luxdevUrl = "https://upload.wikimedia.org/wikipedia/de/thumb/7/71/Lux-Development_logo.svg/1200px-Lux-Development_logo.svg.png"



  imageUrl: string;
  bckColor: string;
  bColor: string;

  more = false;
  m = false;
  height = "0px"
  search = true;
  imageVerif = false;

  top = 50 + this.index


  constructor(private grantsComponent: GrantsComponent) { }

  ngOnInit() {

    console.log(this.top);


    if(this.source == "coordSud"){
      this.bckColor = this.coordSud;
      this.bColor = this.coordSud1;
      this.imageUrl = this.coordSudUrl;
    }else if(this.source == "luxdev"){
      this.bckColor = this.luxdev;
      this.bColor = this.luxdev1;
      this.imageUrl = this.luxdevUrl;
    }

    // if(this.image == null || this.image == ""){
    //   this.imageVerif = false;
    // }else{
    //   this.imageVerif = true;
    // }
    //

    setInterval(()=>{
        if(this.source == "coordSud" && this.grantsComponent.checkCoordSud == true || this.source == "luxdev" && this.grantsComponent.checkLuxdev == true ){
          if(this.grantsComponent.search != "" && this.grantsComponent.search != undefined){
            if(this.title.toLowerCase().includes(this.grantsComponent.search.toLowerCase()) || this.theme != null && this.theme.toLowerCase().includes(this.grantsComponent.search.toLowerCase())){
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



  onTransition(event){
    if(this.more == false){
      window.open(this.url, '_blank')
    }else{
      event.preventDefault();
    }
  }

}
