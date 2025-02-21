import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

   myForm = new FormGroup({
      name : new FormControl('',[Validators.required,]),
      age : new FormControl('',[Validators.required,Validators.min(18)]),
      dateofbirth : new FormControl('',[Validators.required,]),
      address : new FormGroup({
        street: new FormControl(''),
        pincode: new FormControl(''),
        country: new FormControl('')
      }),
    })
  
storedData: Partial<{name: string | null; age: string | null; dateofbirth: string | null;  adress: Partial<{ street: string | null; pincode: string | null; country: string | null; }> }> | undefined;

    onSubmit(){
      console.log( this.myForm); 
      this.storedData = this.myForm.value; 
      console.log("Stored Data:", this.storedData); 
      this.myForm.reset(); 
      
    }
    
      
}





