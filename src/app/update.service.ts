import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }

  update(data:any,id:any){
    return this.http.put('http://localhost:5000/student/updatestudent/'+id,data)
  }
}
