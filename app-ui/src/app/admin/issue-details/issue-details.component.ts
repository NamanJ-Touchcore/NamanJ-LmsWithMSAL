import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from 'src/app/services/book.service';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {

  constructor(private service: SharedService, private bookService: BookService) { }

  ngOnInit(): void {
    this.refreshIssueList();
  }

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  IssueList!: MatTableDataSource<any>;
  issueDetail: string[] = ['tId', 'uName', 'bName', 'DateOfIssue', 'DateOfSubmission', 'DateOfReturn', 'Status', 'Fine'];
  isEmpty = false;

  refreshIssueList() {
    try {
      this.bookService.getIssueDetails().subscribe((data) => {
        data.length == 0 ? this.isEmpty = true : this.isEmpty = false;
        this.IssueList = new MatTableDataSource(data);
        this.IssueList.paginator = this.paginator;
        this.IssueList.sort = this.matSort;
      }, err => {
        this.service.SnackBarErrorMessage(JSON.stringify(err.message));
      });
    } catch (error: any) {
      this.service.SnackBarErrorMessage(JSON.stringify(error));
    }
  }

  filterData($event: any) {
    this.IssueList.filter = $event.target.value;
  }
}
