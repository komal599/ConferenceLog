import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersData:any;
  freeData: any;
  paidData: any;
 
  constructor(private data:DataService){

  }
  ngOnInit(): void {
    console.log('ngoninit called');
    this.data.getSmartphone().subscribe(data => {
    
      console.log(data);
   
      this.usersData = data;
      this.freeData = data
     this.paidData = data;
  
        });
  }


}
