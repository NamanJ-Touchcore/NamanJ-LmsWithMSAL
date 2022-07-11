import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isUserLoggedIn: boolean = false;

  constructor(private SnackBar: MatSnackBar) { }

  SnackBarSuccessMessage(message: string) {
    this.SnackBar.open(message, "Dismiss", {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['text-light'],
    });
  }

  SnackBarErrorMessage(message: string) {
    this.SnackBar.open(message, "Dismiss", {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['text-danger'],
    });
  }
}
