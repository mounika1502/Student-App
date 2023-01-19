import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { StudentComponent } from '../student/student.component';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  StudentsArray:any = []

  Searchtext:any;
  
  Students:any;
  registerForm: any;
  constructor() { }

  ngOnInit(): void {
    
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

  
  isHidden=true;
  editDoc(){
    if(this.isHidden){
      this.isHidden=false;
    }
    else{
      this.isHidden=true;
      
    }
  }
  // StudentArrayid(arg0: string, StudentArrayid: any, arg2: { method: string; headers: { "Access-Control-Allow-Origin": string; "Content-Type": string; }; body: string; }) {
  //   throw new Error('Method not implemented.');
  // }}
  updateStudentData(Firstname:any,Lastname:any,Gender:any,Email:any,DOB:any,Branch:any,CollegeName:any,Mobile:any){
  console.log("updatefunctioncalled")
    console.log(Firstname)
    console.log(Lastname)
    console.log(Gender)
    console.log(Email)
    console.log(DOB)
    console.log(Branch)
    console.log(CollegeName)
    console.log(Mobile)
  }
  
  
  // this.showForm=false;
    // var registerForm={
    //   Firstname:this.Firstname,
    //   Lastname:this.Lastname,
    //   Gender:this.Gender,
    //   Email:this.Email,
    //   DOB:this.DOB,
    //   Branch:this.Branch ,
    //   CollegeName:this.CollegeName,
    //   Mobile:this.Mobile                

    
    if(){
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
    
      }
        )
      
        .catch(error => console.log('error',error))
    
    }
    
  
  

        
      
  //     fetch("http://localhost:5000/student/updateStudent/" + this.Students ,{
  //       method:'PUT',
  //       headers:{
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type":'application/json'
  //       },
        
  //     }).then(res=> res.json())
  //     .then(result=> {
  //       console.log(result)
  //     })
  //       .catch(error => console.log('error',error))
    
    
  // }
 

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

  deletedata(id:any){
    fetch("http://localhost:5000/student//deleteStudent/" + id,{
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

 edit(data:any){

  
 }
}
