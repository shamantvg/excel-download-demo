import { Component, OnInit } from '@angular/core';
import { ExcelService } from './excel-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'excel-download-pjct';
  StudentSampleJson = [
    {
      "firstname": "abc",
      "lastname": "last abc",
      "emailId": "abc@gmail.com",
      "contactNumber": 7411110023
    },
    {
      "firstname": "xyz",
      "lastname": "last xyz",
      "emailId": "xyz@gmail.com",
      "contactNumber": 99002332232,
    }
  ];
  constructor(private excelService: ExcelService) {

  }
  ngOnInit(): void {
    //this.isLoggedIn();
  }

  exportStudentDetailsFunc(): void {
    this.excelService.exportAsExcelFile(this.StudentSampleJson, 'Student Details');
  }

}
