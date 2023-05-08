import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SolicitudselectorComponent } from '../solicitudselector/solicitudselector.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private service:AuthService, private dialog:MatDialog){
    this.userdata = sessionStorage

  }

  userdata:any
  
 
  
  selector(username:any)
  {
    this.dialog.open(SolicitudselectorComponent, {
      data: {username:username}
    }
    );
  }
}
