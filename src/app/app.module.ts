import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';

import { FormComponent } from './form/form.component';
import { DateAgoPipe } from './date-ago.pipe';
import { HighlightDirective } from './highlight.directive';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormComponent,
    DateAgoPipe,
    HighlightDirective,
    QouteDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
