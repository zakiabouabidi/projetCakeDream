import { Component, OnInit } from '@angular/core';

import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  adminMsg!:string
  errMsg!:string
  constructor(private adminService: AdminService){ }
  ngOnInit(): void {
    this.adminService.getAdminBoard().subscribe({
      next:(msg:any)=>{this.adminMsg=msg.message; console.log(msg+"test")},
      error:(err)=>{this.errMsg=err}
            
    })
  }

}
