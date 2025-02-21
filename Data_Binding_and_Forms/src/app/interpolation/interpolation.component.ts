import { Component } from '@angular/core';

interface Employee {
  empId: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-interpolation',
  standalone: false,
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  employees: Employee[] = [
    {
      empId : 101,
      name : 'John',
      age : 34
    },
    {
      empId : 102,
      name : 'Arjun',
      age : 24
    },
    {
      empId : 103,
      name : 'Nikhil',
      age : 24
    }
  ];

  concatenatedNames: string = '';
  totalAge: number = 0;
  youngestEmployee : any = null;
  showYoungestEmployee: boolean = false;
  showConcatinated: boolean = false;

  processEmployeeData() {
    this.concatenatedNames = '';
    this.totalAge = 0;

    this.employees.forEach((employee, index) => {
      this.concatenatedNames += index === this.employees.length - 1 ? employee.name : employee.name + ', ';
      this.totalAge += employee.age;
      this.showConcatinated = true;
      this.showYoungestEmployee = false;
    });
  }

  findYoungestEmployee() {
    const minAge = Math.min(...this.employees.map(emp => emp.age));
    this.youngestEmployee = this.employees.filter(emp => emp.age === minAge);
    this.showYoungestEmployee = true;
    this.showConcatinated = false;
  }
  
  
}


