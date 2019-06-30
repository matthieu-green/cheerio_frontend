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
  @Input() info: string;
  @Input() index: number;

  coordSud = "rgb(254, 198, 46, 0.3)"
  luxdev = "rgba(34,139,34, 0.3)"
  aecid = "rgba(252, 13, 27, 0.5)"
  usaid = "rgba(80, 180, 40, 0.4)"
  fundsforngos = "rgba(100, 100, 100, 0.3)"
  usembassy = "rgba(100, 40, 100, 0.4)"
  idrc = "rgba(14, 104, 160, 0.4)"
  enabel = "rgba(245, 155, 49, 0.8)"
  afd = "rgba(190, 13, 27, 0.4)"


  coordSud1 = "rgb(254, 198, 46, 0.3)"
  luxdev1 = "rgba(34,139,34, 0.3)"
  aecid1 = "rgba(252, 13, 27, 0.5)"
  usaid1 = "rgba(80, 180, 40, 0.4)"
  fundsforngos1 = "rgba(100, 100, 100, 0.3)"
  usembassy1 = "rgba(100, 40, 100, 0.4)"
  idrc1 = "rgba(14, 104, 160, 0.4)"
  enabel1 = "rgba(245, 155, 49, 0.8)"
  afd1 = "rgba(190, 13, 27, 0.4)"

  coordSudUrl = "https://www.coordinationsud.org/wp-content/uploads/logo-21-376x282.png";
  luxdevUrl = "https://upload.wikimedia.org/wikipedia/de/thumb/7/71/Lux-Development_logo.svg/1200px-Lux-Development_logo.svg.png"
  aecidUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AECID_logo.svg/1280px-AECID_logo.svg.png"
  usaidUrl = "https://ed.psu.edu/internal/research-office/funding-opportunities/images/grants-gov/image"
  fundsforngosUrl = "http://www.flexlearnstrategies.net/wp-content/uploads/2015/05/128.jpg"
  usembassyUrl = "https://media.dhakatribune.com/uploads/2016/08/US-Embassy.gif"
  idrcUrl = "https://www.idrc.ca/sites/default/files/sp/Images/Logo-guidelines/colour-file2-ver.png"
  enabelUrl = "https://www.glo-be.be/sites/default/files/inline-images/Enabel_Logo_Color_RGB.jpg"
  afdUrl = "http://www.chair-energy-prosperity.org/wp-content/uploads/2017/04/logo-afd.png"



  imageUrl: string;
  bckColor: string;
  bColor: string;

  infoBox: any;

  buttonVerif = false

  more = false;
  m = false;
  height = "0px"
  search = true;
  imageVerif = false;

  top = 50 + this.index


  constructor(private grantsComponent: GrantsComponent) { }

  ngOnInit() {

    console.log(this.top);

    this.infoBox = this.info


    if(this.source == "coordSud"){
      this.bckColor = this.coordSud;
      this.bColor = this.coordSud1;
      this.imageUrl = this.coordSudUrl;
    }else if(this.source == "luxdev"){
      this.bckColor = this.luxdev;
      this.bColor = this.luxdev1;
      this.imageUrl = this.luxdevUrl;
      this.buttonVerif = true;
    }else if(this.source == "aecid"){
      this.bckColor = this.aecid;
      this.bColor = this.aecid1;
      this.imageUrl = this.aecidUrl;
    }else if(this.source == "usaid"){
      this.bckColor = this.usaid;
      this.bColor = this.usaid1;
      this.imageUrl = this.usaidUrl;
      this.infoBox = this.info.split("=======================").join("||-------||")
    }else if(this.source == "fundsforngos"){
      this.bckColor = this.fundsforngos;
      this.bColor = this.fundsforngos1;
      this.imageUrl = this.fundsforngosUrl;
    }else if(this.source == "usembassy"){
      this.bckColor = this.usembassy;
      this.bColor = this.usembassy1;
      this.imageUrl = this.usembassyUrl;
    }else if(this.source == "idrc"){
      this.bckColor = this.idrc;
      this.bColor = this.idrc1;
      this.imageUrl = this.idrcUrl;
    }else if(this.source == "enabel"){
      this.bckColor = this.enabel;
      this.bColor = this.enabel1;
      this.imageUrl = this.enabelUrl;
      this.buttonVerif = true;
    }else if(this.source == "afd"){
      this.bckColor = this.afd;
      this.bColor = this.afd1;
      this.imageUrl = this.afdUrl;
      this.buttonVerif = true;
    }


    setInterval(()=>{
        if(this.source == "coordSud" && this.grantsComponent.checkCoordSud == true || this.source == "luxdev" && this.grantsComponent.checkLuxdev == true || this.source == "aecid" && this.grantsComponent.checkAecid == true
      ||  this.source == "usaid" && this.grantsComponent.checkUsaid == true ||  this.source == "fundsforngos" && this.grantsComponent.checkFundsForNGO == true ||  this.source == "usembassy" && this.grantsComponent.checkUsembassy == true
    ||  this.source == "idrc" && this.grantsComponent.checkIdrc == true ||  this.source == "enabel" && this.grantsComponent.checkEnabel == true ||  this.source == "afd" && this.grantsComponent.checkAfd == true){
          if(this.grantsComponent.search != "" && this.grantsComponent.search != undefined){
            if(this.title.toLowerCase().includes(this.grantsComponent.search.toLowerCase()) || this.financement != null && this.financement.toLowerCase().includes(this.grantsComponent.search.toLowerCase()) || this.theme != null && this.theme.toLowerCase().includes(this.grantsComponent.search.toLowerCase())){
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


  modalFunction(){
    this.grantsComponent.modal = this.infoBox
  }



  onTransition(event){
    if(this.more == false){
      window.open(this.url, '_blank')
    }else{
      event.preventDefault();
    }
  }

}
