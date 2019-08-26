import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() quote:Quote;
liked=0;
disliked=0;
highVote=5;
like(){
  this.liked=this.liked+1
  // if(this.liked>this.highVote)
  
}
dislike(){
  this.disliked=this.disliked+1
}

  constructor() { }

  ngOnInit() {
  }

}
