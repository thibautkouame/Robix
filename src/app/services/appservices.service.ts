import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { }
  getUserRobot(){
    //const token = localStorage.getItem('token');
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': Bearer ${token}
    // };
    // return this.http.get<any>('http://127.0.0.1:3000/robot/robots',{headers})
    return this.http.get<any>('http://127.0.0.1:3000/robot/robots')
  }
  getUserDrone(){
    //const token = localStorage.getItem('token');
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': Bearer ${token}
    // };
    // return this.http.get<any>('http://127.0.0.1:3000/robot/robots',{headers})
    return this.http.get<any>('http://127.0.0.1:3000/drone/drones')
  }
}
