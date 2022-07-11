import { Component, OnInit } from '@angular/core';
import { profileDetails } from '../models/profileDetails';
import { ProfileService } from '../services/profile.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails!: profileDetails;
  constructor(
    private service: SharedService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    try {
      this.profileService.getUserProfile().subscribe(res => {
        this.userDetails = res;
      }, err => {
        this.service.SnackBarErrorMessage(JSON.stringify(err.error));
      })
    }
    catch (err: any) {
      this.service.SnackBarErrorMessage(JSON.stringify(err.error));
    }
  }
}
