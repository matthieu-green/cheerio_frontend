import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from '../services/author.service'
import { Author } from '../models/author.model'
import { baseUrl } from '../baseurl';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() name: string;
  @Input() birth: string;
  @Input() biography: string;
  @Input() nationality: string;
  @Input() imageName: string;

  //author image
  imageSource: string;
  color = "rgb(8, 100, 19)";

  constructor() { }

  ngOnInit() {

    this.imageSource = baseUrl + "images/" + this.imageName;

  }

}
