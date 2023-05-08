import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  userdata: any;
  constructor (private builder: FormBuilder, private toastr: ToastrService, private service: AuthService, private router:Router){
    
        this.userdata = sessionStorage
      
  }
  CerrarSesion(){
    sessionStorage.clear()
    localStorage.clear()
  }
  Admin(){
    if(sessionStorage.getItem('userrole') == 'Admin'){
    this.router.navigate(['/DashboardAdmin'])
  }
  else{
    this.toastr.error('No tienes permisos para acceder a esta seccion')
  }
}
}