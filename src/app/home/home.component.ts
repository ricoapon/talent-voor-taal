import {Component, OnInit} from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotes: Quote[] = [
    {
      author: 'Marzena',
      message: 'Met Corintha werk ik altijd heel goed samen. De lessen met haar zijn erg interessant. Ik stel ook haar gevoel voor humor op prijs. De echte lerares!'
    },
    {
      author: 'Zeynep',
      message: 'I advise Corintha to most of my friends because I think she is very helpful, very kind and teach me a lot.'
    },
    {
      author: 'Ana',
      message: 'Ik heb meer durf om met andere mensen te praten.'
    },
    {
      author: 'Atilla',
      message: 'Ik heb goed nieuws, we zijn met een 9 geslaagd voor het leesexamen. Dank je wel Corintha!'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
    // When switching pages, the carousel will stop cycling. To fix this, we manually start it every time we initialize.
    let carousel = new bootstrap.Carousel(document.getElementById('carousel-quotes'));
    carousel.cycle();
  }
}

export type Quote = {
  author: string,
  message: string;
}
