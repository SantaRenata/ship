import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getShips(){
    let endpoint = "ships";
    let url = environment.restapi_host + endpoint;
    
    return this.http.get<any>(url);
  }

  addShips(ship:any){
    let endpoint = "ships";
    let url = environment.restapi_host + endpoint;
    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let httpOption = {
      headers: headerObj
    }
    return this.http.post(url, ship, httpOption);

  }

}
