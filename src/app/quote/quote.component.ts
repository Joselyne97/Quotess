import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:string[];
  Quotes:Quote[] = [
     {id:1,name:'There is nothing permanent except change',description:'Heraclitus'},
     {id:2,name:'Let us sacrifice ourselfs today so that our children can have a better tomorrow',description:'A.P.J.Abdul Kalam'},
     {id:3,name:'There is no charm equal to tenderness of heart',description:'Jane Austen'},
     {id:4,name:'All that we see or seem is but a dream within a dream',description:'Edgar Allan Poe'},
     {id:5,name:'The only journey is the one within',description:'Rainer Maria Rilke'},
     {id:6,name:'Think in the morning, act in the noon, eat in the evening and sleep in the night',description:'Will Rogers'},
   ];
  constructor() { }

  ngOnInit() {
  }

}
