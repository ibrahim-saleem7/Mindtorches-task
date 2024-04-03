import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  employeeForm!:FormGroup
  isSuccess:boolean = false

  constructor(private fb:FormBuilder , private dataStoreService:DataStoreService , private router : Router) {}


  ngOnInit(): void {
    this.createFrom()
  }


  createFrom(){
    this.employeeForm = this.fb.group({
      companyName:[undefined,Validators.required],
      employeeName:[undefined,Validators.required],
      idNo:[undefined,[Validators.required, Validators.pattern(/^\d+$/)]],
      DOB:[undefined,Validators.required],
      email:[undefined,[Validators.required,Validators.email]],
    })
  }


  onSubmit(){
    this.dataStoreService.dataEmployees.set(this.employeeForm.value)
    this.isSuccess = true
    this.employeeForm.reset()
    setTimeout(() => {
      this.isSuccess = false
      this.router.navigate(['/card-id'])
    }, 3000);

  }



}
