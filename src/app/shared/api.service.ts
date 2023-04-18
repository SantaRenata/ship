/*
* File: api.service.ts
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-04-18
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

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
