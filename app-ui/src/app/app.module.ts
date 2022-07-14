import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AddEditBooksAdminComponent } from './admin/add-edit-books/add-edit-books.component';
import { BooksToApproveComponent } from './admin/books-to-approve/books-to-approve.component';
import { IssueDetailsComponent } from './admin/issue-details/issue-details.component';
import { ShowBooksAdminComponent } from './admin/show-books/show-books.component';
import { MyBooksComponent } from './student/my-books/my-books.component';
import { ShowBooksStudentComponent } from './student/show-books/show-books.component';

// for Msal
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';

// env
import { environment } from 'src/environments/environment';

// services
import { SharedService } from './services/shared.service';
import { BookService } from './services/book.service';
import { ProfileService } from './services/profile.service';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

// misc
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    AddEditBooksAdminComponent,
    ShowBooksAdminComponent,
    MyBooksComponent,
    ShowBooksStudentComponent,
    BooksToApproveComponent,
    IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,

    MsalModule.forRoot(new PublicClientApplication
      (
        {
          auth: {
            clientId: environment.authClientId,
            redirectUri: environment.authRedirectUrl,
            authority: environment.authAuthority
          },
          cache: {
            cacheLocation: environment.cacheLocation,
            storeAuthStateInCookie: environment.authStateInCookie
          }
        }
      ),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: [environment.authScope]
        }
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map(
          [
            [environment.graphUrl, [environment.authScope]],
            ['localhost', ['api://1e6ef937-5fcd-42bf-a0f3-5c349158854b/api.scope']],
            ['https://lmsapp-api-apim.azure-api.net',['api://1e6ef937-5fcd-42bf-a0f3-5c349158854b/api.scope']],
            ['https://lmsapp-api.azurewebsites.net', ['api://1e6ef937-5fcd-42bf-a0f3-5c349158854b/api.scope']]
          ]
        )
      }
    )
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
  }, MsalGuard, SharedService, BookService, ProfileService],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }