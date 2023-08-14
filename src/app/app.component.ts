import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'vK Application';
  constructor(private _dialog:MatDialog, private _empService : EmployeeService){}

  ngOnInit(): void {
    this.getEmployeeList();
      
  }
  AddEmpEditEmp(){
    this._dialog.open(EmpAddEditComponent);
  }
//for fetching the data from server
  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      next:(res)=>{
        console.log(res);

      },
      error:console.log,
      //its same as above
      // error:(err)=>{
      //   console.log(err);
      // }
    })
  }
}
