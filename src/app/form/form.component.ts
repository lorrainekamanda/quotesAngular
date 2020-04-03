import { Quote } from './../quote';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() quote:Quote;
  newEntry:Quote = new Quote ("",new Date(),"","")

@Output() toAdd = new EventEmitter <Quote>()

  addQuote(){
    this.toAdd.emit(this.newEntry)
     this.newEntry = new Quote ("",new Date(),"","")
  }


  constructor() { }

  ngOnInit(): void {
  }

}
