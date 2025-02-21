import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: false,
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  textInput: string = '';

}
