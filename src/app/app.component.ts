import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentCount: number = 0;
  title = 'StateManagment';


  increment() {
    this.currentCount++;
    console.log('Increment clicked');
  }

  decrement() {
    this.currentCount--;
    console.log('Decrement clicked');
  }
}
