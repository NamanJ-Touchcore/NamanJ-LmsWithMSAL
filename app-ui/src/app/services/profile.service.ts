import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { profileDetails } from '../models/profileDetails';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly APIUrl = 'https://lmsapp-api-apim.azure-api.net/api';

  constructor(private http: HttpClient) { }

  getUserProfile(){
    return this.http.get<profileDetails>(environment.graphUrl);
  }

  getUserRole(){
    return this.http.get(this.APIUrl + '/user');
  }
}
