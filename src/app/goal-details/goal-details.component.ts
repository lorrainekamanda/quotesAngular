import { DateAgoPipe } from './../date-ago.pipe';
import { Quote } from './../quote';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() quote:Quote
  @Output() toDelete = new EventEmitter <Boolean>()

   deleteComment(view:Boolean){
     this.toDelete.emit(view)
   }
   numberOfLikes:number =0
   likeButton(){
     this.numberOfLikes ++
   }
   numberOfDislikes:number =0 
   dislikeButton(){
     this.numberOfDislikes ++
   }
   authorDate:Date;
 

  constructor() { }

  ngOnInit(): void {
  }

}
