import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote ("Lorraine Kamanda",new Date(2012,11,12),"Nostalgia:delicate,but potent.In Greek,it means 'the pain from an old wound', a twinge in your heart far more powerful than memory alone it's a feeling of a place we ache to go again","Don Draper"),
    new Quote ("Leila Njeri",new Date (2000,9,2),"I learned that courage was not the absence of fear,but the triumph over it.The brave man is not he who does not feel afraid,but he who conquers that fear","Nelson Mandela"),
    new Quote ("Grace Claire" ,new Date (1980,5,6),"My mission in life is not merely to survive,but to do so with some passion,some compassion,some humor and some style","Maya Angeloue"),
    new Quote ("Lucy Njoki",new Date(1999,7,7),"Most people do not listen with the intent to understand,but with the intent to reply","Stephen Covey")
    
  ]
  deleteEntry(toDelete,index){
    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
 

  addEntry(goal){
    this.quotes.push(goal)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
