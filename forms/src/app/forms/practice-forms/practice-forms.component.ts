import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-forms',
  templateUrl: './practice-forms.component.html',
  styleUrls: ['./practice-forms.component.css']
})
export class PracticeFormsComponent {
  practiceform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    phone:new FormControl('',[Validators.required, Validators.pattern('^[0-9]{10}$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('',[Validators.required]),
    course:new FormControl('',[Validators.required])
  })
  genders:any=['Male', 'Female', 'Others']
  course:any=['Python','C++','Angular','Java']
  submit(){
    console.log(this.practiceform.value)
  }
  // get phone(){
  //   return this.practiceform.get('phone')
  // }
  name:any
  phone:any
  email:any
  gender:any
  

}
