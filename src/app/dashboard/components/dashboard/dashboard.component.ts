import { Component, OnInit } from '@angular/core';
import { DatashareService } from 'src/app/login/components/datashare.service';
import { HttpService } from 'src/app/dashboard/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 name:any
 userJsonArr:any
  constructor(private datashare :DatashareService, private httpService:HttpService) { 
    
    // datashare service's getname method is subscribed to get the value of email
    this.datashare.getName.subscribe(data => {
      this.name = data;
    })

    // http service's getDataFromServer method is subscribed to get the data from rest  api response
    this.httpService.getDataFromServer().subscribe(data => {
      this.userJsonArr = data;
    })
  }

  ngOnInit(): void {
  }

}
