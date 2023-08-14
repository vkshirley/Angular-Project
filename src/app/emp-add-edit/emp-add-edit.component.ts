import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

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
constructor(private fb:FormBuilder,private _empService:EmployeeService, 
  private _dialogRef: DialogRef<EmpAddEditComponent>){
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
// to catch the service file on submit
onFormSubmit(){
  if(this.empForm.valid){
    this._empService.addEmployee(this.empForm.value).subscribe({
      next:(val: any)=>{
        alert('done');
        this._dialogRef.close();

      },
      error:(err:any)=>{
        console.error(err);
      },
    })
  }
}
}
