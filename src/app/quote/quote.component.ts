import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
      new Quote(1, 'There is nothing permanent except change','Heraclitus', 'Joselyne', new Date(2019,8,23)),
      new Quote(2, 'Let us sacrifice ourselfs today so that our children can have a better tomorrow','A.P.J.Abdul Kalam', 'Jojo', new Date(2019,8,23)),
      new Quote(3, 'There is no charm equal to tenderness of heart','Jane Austen','Fabiola', new Date(2019,8,23)),
      new Quote(4, 'All that we see or seem is but a dream within a dream','Edgar Allan Poe', 'Arielle', new Date(2019,8,23)),
      new Quote(5, 'The only journey is the one within','Rainer Maria Rilke','Ritha', new Date(2019,8,23)),
      new Quote(6, 'Think in the morning, act in the noon, eat in the evening and sleep in the night','Will Rogers','Gaby', new Date(2019,8,23)),
    ];

    toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    completeQuote(isComplete, index){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
  constructor() { }

  ngOnInit() {
  }

}
