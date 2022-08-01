import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `
    <h1>{{ title }}</h1> 
    <img [src]="imageUrl">
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "We are going places!"
  imageUrl = "https://www.apple.com"
  
}
//line 7 is string interpolation/binding
//string binding more useful when you want to bind texts inside a div, span, h1-h6 etc
//property binding works from the component to the DOM