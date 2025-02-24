import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // 
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];
  userForm: FormGroup; 

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  // Fetch users from backend
  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log('Users fetched:', data);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  // Add user
  addUser() {
    if (this.userForm.invalid) {
      alert('Please enter valid name and age.');
      return;
    }

    const userToSend = this.userForm.value;

    this.userService.createUser(userToSend).subscribe(
      (response) => {
        console.log('User added:', response);
        this.getUsers(); 
        this.userForm.reset(); 
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
}
