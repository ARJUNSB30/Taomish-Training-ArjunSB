import { Component } from '@angular/core';
import { PerimeterService } from '../perimeter.service';

@Component({
  selector: 'app-result',
  standalone: false,
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  perimeter: number = 0;

  constructor(private perimeterService: PerimeterService) {}        

  getPerimeter() {
    this.perimeter = this.perimeterService.getPerimeter();
  }
}
