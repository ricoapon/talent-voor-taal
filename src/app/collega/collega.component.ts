import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-collega',
  templateUrl: './collega.component.html',
  styleUrls: ['./collega.component.css']
})
export class CollegaComponent implements OnInit {
  images: Image[] = [
    {filename: 'BiebaandeVliet.png', width: 129},
    {filename: 'BiebaanZet.svg', width: 140},
    {filename: 'Bisbee.png', width: 89},
    {filename: 'CompanyWebcast.png', width: 240},
    {filename: 'Florence.png', width: 126},
    {filename: 'Foxtaal.png', width: 115},
    {filename: 'LezenEnSchrijven.svg', width: 117},
    {filename: 'Mano.png', width: 121},
    {filename: 'NIOW.png', width: 139},
    {filename: 'WelzijnRijswijk.png', width: 181},
  ]

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: false,
    dots: true,
    navSpeed: 700,
    autoWidth: true,
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}

export type Image = {
  filename: string,
  /** The width of the image calculated when the height is 50. */
  width: number,
}
