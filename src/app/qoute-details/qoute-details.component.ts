import { Quote } from './../quote';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {

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
