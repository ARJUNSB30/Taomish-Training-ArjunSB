import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custombinding',
  standalone: false,
  templateUrl: './custombinding.component.html',
  styleUrl: './custombinding.component.css',

})
export class CustombindingComponent {
  @Input() message= "";

  @Output() customEvent = new EventEmitter<string>();

  sendData() {
    this.customEvent.emit('Hello from Child!');
  }

}
