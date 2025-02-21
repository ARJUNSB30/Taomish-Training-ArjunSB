import { Component } from '@angular/core';
import { PerimeterService } from '../perimeter.service';

@Component({
  selector: 'app-shape',
  standalone: false,
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css'
})
export class ShapeComponent {     

  shapeType = 'rectangle';
  length = 0;
  width = 0;
  radius = 0;
  sideA = 0;
  sideB = 0;
  sideC = 0;

  constructor(private perimeterService: PerimeterService) {}

  calculatePerimeter() {

    let perimeter = 0;

    if (this.shapeType === 'rectangle') {
      perimeter = this.perimeterService.getRectanglePerimeter(this.length, this.width);

    } else if (this.shapeType === 'circle') {
      perimeter = this.perimeterService.getCirclePerimeter(this.radius);
      
    } else if (this.shapeType === 'triangle') {
      perimeter = this.perimeterService.getTrianglePerimeter(this.sideA, this.sideB, this.sideC);
    }

    this.perimeterService.setPerimeter(perimeter);
  }
}