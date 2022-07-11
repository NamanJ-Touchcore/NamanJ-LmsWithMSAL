import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ProfileService } from '../services/profile.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  private readonly _destroy = new Subject<void>();

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

  isLoggedIn() {
    this.isUserLoggedIn = this.sharedService.isUserLoggedIn;
  }
}
