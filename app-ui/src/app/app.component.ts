import { Component, Inject } from '@angular/core';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileService } from './services/profile.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLoggedIn: boolean = false;
  isUserManager!: any;
  private readonly _destroy = new Subject<void>();

  constructor(@Inject(
    MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadCastService: MsalBroadcastService,
    private authService: MsalService,
    private sharedService: SharedService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.msalBroadCastService.inProgress$.pipe
      (filter((interactionStatus: InteractionStatus) => interactionStatus == InteractionStatus.None), takeUntil(this._destroy))
      .subscribe(x => {
        this.isUserLoggedIn = this.authService.instance.getAllAccounts().length > 0;
        this.sharedService.isUserLoggedIn = this.isUserLoggedIn;
      });
      this.isManager();
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

  login() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest)
    } else {
      this.authService.loginRedirect();
    }
  }


  logout() {
    this.authService.logoutRedirect({ postLogoutRedirectUri: environment.postLogoutUrl });
  }

  isManager(){
    this.profileService.getUserRole().subscribe(res => {
      this.isUserManager = res;
    })
  }
}
