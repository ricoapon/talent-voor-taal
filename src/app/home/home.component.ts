import { Component, OnInit } from '@angular/core';
declare var bootstrap:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // When switching pages, the carousel will stop cycling. To fix this, we manually start it every time we initialize.
    let carousel = new bootstrap.Carousel(document.getElementById('carousel-quotes'));
    carousel.cycle();
  }
}
