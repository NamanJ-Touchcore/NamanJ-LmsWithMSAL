import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { profileDetails } from '../models/profileDetails';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserProfile(){
    return this.http.get<profileDetails>(environment.graphUrl);
  }

  getUserRole(){
    return this.http.get('https://localhost:7191/api/User');
  }
}
