import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { BooksToApproveComponent } from './admin/books-to-approve/books-to-approve.component';
import { IssueDetailsComponent } from './admin/issue-details/issue-details.component';
import { ShowBooksAdminComponent } from './admin/show-books/show-books.component';
import { HomeComponent } from './home/home.component';
import { MyBooksComponent } from './student/my-books/my-books.component';
import { ShowBooksStudentComponent } from './student/show-books/show-books.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent, canActivate:[MsalGuard]
  },
  {
    path:"admin/available-books", component: ShowBooksAdminComponent, canActivate: [MsalGuard]
  },
  {
    path:"admin/books-to-approve", component: BooksToApproveComponent, canActivate: [MsalGuard]
  },
  {
    path:"admin/issue-details", component: IssueDetailsComponent, canActivate: [MsalGuard]
  },
  {
    path:"student/available-books", component: ShowBooksStudentComponent, canActivate: [MsalGuard]
  },
  {
    path:"student/my-books", component: MyBooksComponent, canActivate: [MsalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
