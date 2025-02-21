import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angualar';
  msg='hello msg from parent';

  message = '';

  receiveData(event: string) {
    this.message = event; 
  }
}
