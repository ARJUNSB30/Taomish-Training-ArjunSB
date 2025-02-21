import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngmodel',
  standalone: false,
  templateUrl: './ngmodel.component.html',
  styleUrl: './ngmodel.component.css'
})

export class NgmodelComponent {

  age: number | null = null;
  message: string = '';
  showResult: boolean = false;
  resultClass: string = '';

  checkAge() {
    this.showResult = true;
    if (this.age === null ) {
      this.message = 'Please enter your age.';
      this.resultClass = 'warning-message'; // Add a new class for warnings
    } else if (this.age >= 18) {
      this.message = 'You are eligible to vote!';
      this.resultClass = 'success-message';
    } else {
      this.message = 'Sorry, you are not eligible to vote yet.';
      this.resultClass = 'error-message';
    }
  }
}