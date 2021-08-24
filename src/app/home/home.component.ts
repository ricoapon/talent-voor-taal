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
      author: 'Marzena, privécursiste',
      message: 'Met Corintha werk ik altijd heel goed samen. De lessen met haar zijn erg interessant. Ik stel ook haar gevoel voor humor op prijs. De echte lerares!'
    },
    {
      author: 'Contactpersoon Bibliotheek aan de Vliet',
      message: 'Deskundig, toegankelijk, duidelijke communicatie en betrokkenheid zijn de woorden die ik kies om de samenwerking met jou te omschrijven.'
    },
    {
      author: 'NT2-stagiaire',
      message: 'Ik ben heel blij dat ik de stap heb genomen om bij jou stage te lopen. Je hebt me enorm veel geleerd.'
    },
    {
      author: 'Zeynep, privécursiste',
      message: 'I advise Corintha to most of my friends because I think she is very helpful, very kind and teach me a lot.'
    },
    {
      author: 'Docent workshop Bisbee',
      message: 'Goede docent, duidelijk, gestructureerd en respectvol.'
    },
    {
      author: 'Ana, privécursiste',
      message: 'Ik vind Nederlands leren heel leuk met jou. Ik heb meer durf om met andere mensen Nederlands te praten.'
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
