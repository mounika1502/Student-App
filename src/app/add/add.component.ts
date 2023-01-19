import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    registerForm: any;
  
    constructor() { }
  
    ngOnInit(): void { 
     this.registerForm = new FormGroup({
        firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        lastName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        gender: new FormControl('',[Validators.required]),
        dateofbirth: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
        level: new FormControl('',[Validators.required]),
        department: new FormControl('',[Validators.required]),
        mobile: new FormControl('',[Validators.required,Validators.minLength(5)])
  
  
      });
  
    }
  
    registerSubmitted(){
      console.log(this.registerForm.value);
    }
    get firstName()
    {
     return this.registerForm.get('firstName');
    }
    get lastName()
    {
     return this.registerForm.get('lastName');
    }
    get gender()
    {
     return this.registerForm.get('gender');
    }
    get dateofbirth()
    {
     return this.registerForm.get('dateofbirth');
    }
    get email()
    {
     return this.registerForm.get('email');
    }
    get level()
    {
     return this.registerForm.get('level');
    }
    get department()
    {
     return this.registerForm.get('department');
    }
    get mobile()
    {
     return this.registerForm.get('mobile');
    }
  }
  

 

