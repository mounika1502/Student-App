import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit, ɵɵngDeclareClassMetadata } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
updateStudentData(arg0: string,arg1: string,arg2: string,arg3: string,arg4: string,arg5: string,arg6: string,arg7: string) {
throw new Error('Method not implemented.');
}
  registerForm: any;
  form:boolean=false
 
  StudentsArray:any = []
  Searchtext:any;
  
  Students:any;
  Firstname:any;
  Lastname:any;
  Gender:any;
  DOB:any;
  Email:any;
  Branch:any;
  CollegeName:any;
  Mobile:any;

    
  constructor() {}

  ngOnInit(): void { 
   
    
   
   this.registerForm = new FormGroup({
      Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      Lastname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      Gender: new FormControl('',[Validators.required]),
      DOB: new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required,Validators.email]),
      Branch: new FormControl('',[Validators.required]),
      CollegeName: new FormControl('',[Validators.required]),
      Mobile: new FormControl('',[Validators.required,Validators.minLength(5)])


    });
    
  }

  toggleStudents(){
    this.Students=!this.Students
  }

  tabkey:any=[];
  tabvalue:any=[];
  getData(){
    this.StudentsArray.forEach((element:any)=>{
      this.tabkey=Object.keys(element);
      this.tabvalue.push(Object.values(element));
    });
  }
 
  toggle(){
    this.form=!this.form     
  }

  isHidden=true;
  editDoc(){
    if(){    
   
      this.isHidden=true;
      
    }
  
  
  
    updateStudentData(data:any){
      this.service.update(data,data._id).subscribe(data =>{
        console.log(data)
      })
      console.log(data._id)
    }
  }


  registerSubmitted(data:any){
     console.log(data);
    fetch("http://localhost:5000/student/addStudent", {
      method:'post',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(this.registerForm.value)
    }).then(res=> res.json())
    .then(result=>{ 
      console.log(result)
      alert('Successfully Submited')
    }
      )
    
      .catch(error => console.log('error',error))
  
  }

updatedata(){
  fetch("http://localhost:5000/student/updateStudent/"+this.StudentsArray, {
    method:'update',
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Content-Type":'application/json'
    },
    body:JSON.stringify(this.registerForm.value)
  }).then(res=> res.json())
  .then(result=> 
    console.log(result))
    .catch(error => console.log('error',error))

}

 deletedata(id:any){
     fetch("http://localhost:5000/student/deleteStudent/" + id,{
      method:'DELETE',
      headers:{
        "access-Control-Allow-Origin":"*"
      },
     })
     .then(response => response.json())
     .then(result=>{
      console.log(result)
      this.getStudents()
     }
     ).catch(err =>
      console.log(err))
     
  }
  get() {
    throw new Error('Method not implemented.');
  }

  getStudents(){
    
    fetch("http://localhost:5000/student/getStudent", {
      method:'GET',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(this.getStudents)
    }).then(res=> res.json())
    .then(result=>{
 
      console.log(result)
    this.StudentsArray=result.StudentInfo
    
  }
  )
      .catch(error => console.log('error',error))
  }
}



   
this.registerForm({
  get Firstname()
  {
   return this.registerForm.get('Firstname');
  }
  get Lastname()
  {
   return this.registerForm.get('Lastname');
  }
  get Gender()
  {
   return this.registerForm.get('Gender');
  }
  get DOB()
  {
   return this.registerForm.get('DOB');
  }
  get Email()
  {
   return this.registerForm.get('Email');
  }
  get Branch()
  {
   return this.registerForm.get('Branch');
  }
  get CollegeName()
  {
   return this.registerForm.get('CollegeName');
  }
  get Mobile()
  {
   return this.registerForm.get('Mobile');
  }
})
}



  

  

 






