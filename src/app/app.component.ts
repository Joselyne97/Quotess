import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Quotes:Quote[] = [
   {id:1,name:'There is nothing permanent except change'},
   {id:2,name:'Let us sacrifice ourselfs today so that our children can have a better tomorrow'},
   {id:3,name:'There is no charm equal to tenderness of heart'},
   {id:4,name:'All that we see or seem is but a dream within a dream'},
   {id:5,name:'The only journey is the one within'},
   {id:6,name:'Think in the morning, act in the noon, eat in the evening and sleep in the night'},
    ];
}
