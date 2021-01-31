import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences" ;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){}
 
  getSmartphone() {
    console.log("URL data called")

    return this.http.get(URL);
  }
    
  


}
