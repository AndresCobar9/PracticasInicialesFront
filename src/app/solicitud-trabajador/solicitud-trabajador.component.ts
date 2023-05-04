import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-solicitud-trabajador',
  templateUrl: './solicitud-trabajador.component.html',
  styleUrls: ['./solicitud-trabajador.component.css']
})
export class SolicitudTrabajadorComponent {

constructor(private builder: FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router){
  this.fecha = new Date().toISOString().split('T')[0];

  this.SolicitudForm = this.builder.group({

    Solicitante: this.builder.control({value: sessionStorage.getItem('username'), disabled:true},Validators.required),
    Asunto: this.builder.control('',Validators.required),
    Fecha: this.builder.control(this.fecha,Validators.required),
    Descripcion: this.builder.control('',Validators.required),
    Area: this.builder.control('',Validators.required),
    Prioridad: this.builder.control('',Validators.required)
    
  })

}
SolicitudForm = this.builder.group({
  Solicitante: this.builder.control('',Validators.required),
  Asunto: this.builder.control('',Validators.required),
  Fecha: this.builder.control('',Validators.required),
  Descripcion: this.builder.control('',Validators.required),
  Area: this.builder.control('',Validators.required),
  Prioridad: this.builder.control('',Validators.required)
  
})

fecha:any;



registrarSolicitud(){
  this.SolicitudForm.value.Solicitante = sessionStorage.getItem('username')
  console.log(this.SolicitudForm.value)
  this.service.registrarSolicitud(this.SolicitudForm.value).subscribe((data:any)=>{
    
    this.toastr.success('Solicitud enviada correctamente')
    this.router.navigateByUrl('Dashboard')
  })
}


}