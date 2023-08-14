import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm:FormGroup;
education:string[]=[
  'High School(HSC)',
  'SSC',
  'Diploma',
  'Graduate',
  'Post Graduate'
];
constructor(private fb:FormBuilder){
  this.empForm = this.fb.group({
    firstName:'',
    lastName:'',
    email:'',
    dob:'',
    gender:'',
    Qualification:'',
    company:''
  })
}
onFormSubmit(){
  if(this.empForm.valid){
    console.log(this.empForm.value)
  }
}
}
