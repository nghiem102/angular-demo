import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      userName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.email])
    })
   }

  ngOnInit(): void {
  }

}
