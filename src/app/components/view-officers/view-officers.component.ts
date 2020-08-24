import { Component, OnInit } from '@angular/core';
import { HisOfficersServiceService } from 'src/app/services/his-officers-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-officers',
  templateUrl: './view-officers.component.html',
  styleUrls: ['./view-officers.component.css']
})
export class ViewOfficersComponent implements OnInit {

  constructor(private service:HisOfficersServiceService, private router:Router) { }

  officers:any;
  officerId:any;
  isActive:boolean=true;

  ngOnInit(): void {
    let resp = this.service.viewOfficers();
    resp.subscribe((data)=>this.officers=data);
  }

  public contactUpdate(officer){
    this.service.hisOfficerlSetter(officer);
    this.router.navigate(["/c"])
  }

  public changeActiveStatus(){
    //let resp = this.service.updateStatus();
    //resp.subscribe((data)=>this.contacts=data);
  }

}
