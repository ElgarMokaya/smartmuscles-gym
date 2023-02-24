import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL:string =  'http://localhost:8000';
  constructor(private httpClient:HttpClient) {   }
    getMembers(){
       return this.httpClient.get(`{this.API_URL}/members`)
    }


}

