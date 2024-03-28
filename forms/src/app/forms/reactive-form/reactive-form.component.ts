import { Component } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators, PatternValidator} from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginform = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  }
  )
  loginUser(){
    console.log(this.loginform.value);
  }
  get user(){
    return this.loginform.get('user')
  }
  get email(){
    return this.loginform.get('email')
  }
  get password(){
    return this.loginform.get('password')
  }

}
