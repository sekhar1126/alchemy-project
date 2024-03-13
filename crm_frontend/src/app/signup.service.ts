import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  BASEURL:string="http://localhost:9191/user/";
    constructor(private http:HttpClient)
     {
   
     }
     register(data:any){
      return this.http.post<any>(this.BASEURL+"saveuser",data);
    }
  }
