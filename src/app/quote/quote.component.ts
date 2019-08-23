import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote (1, 'There is nothing permanent except change', 'It was quoted by Heraclitus'),
    new Quote (2, 'Let us sacrifice ourselfs today so that our children can have a better tomorrow', 'It was quoted by A.P.J.Abdul Kalam'),
    new Quote (3, 'There is no charm equal to tenderness of heart', 'It was quoted by Jane Austen'),
    new Quote (4, 'All that we see or seem is but a dream within a dream', 'It was quoted by Edgar Allan Poe'),
    new Quote (5, 'The only journey is the one within', 'It was quoted by Rainer Maria Rilke'),
    new Quote (6, 'Think in the morning, act in the noon, eat in the evening and sleep in the night', 'It was quoted by Will Rogers'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
