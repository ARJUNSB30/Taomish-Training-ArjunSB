import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerimeterService {

  constructor() { }

  private perimeter: number = 0;

  setPerimeter(value: number) {
    this.perimeter = value;
  }

  getPerimeter(): number {
    return this.perimeter;
  }

  getRectanglePerimeter(length: number, width: number): number {
    return 2 * (length + width);
  }

  getCirclePerimeter(radius: number): number {
    return 2 * Math.PI * radius;
  }

  getTrianglePerimeter(a: number, b: number, c: number): number {
    return a + b + c;
  }
}

                 