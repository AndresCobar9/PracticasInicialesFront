import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-solicitudes',
  templateUrl: './historial-solicitudes.component.html',
  styleUrls: ['./historial-solicitudes.component.css']
})
export class HistorialSolicitudesComponent {
  solicitudes: any
  estado: any = false
  constructor(private builder: FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router) {
    this.getSolicitudes()
  }

  SolicitudForm = this.builder.group({
    
    Asunto: this.builder.control({value:'',disabled:true},Validators.required),
    Fecha: this.builder.control({value:'',disabled:true},Validators.required),
    Descripcion: this.builder.control({value:'',disabled:true},Validators.required),
    Area: this.builder.control({value:'',disabled:true},Validators.required),
    
    
  })


  ActualizarDatos(id:any){
    this.service.getSolicitudID(id).subscribe((data:any)=>{
      this.estado = data.autorizado
      console.log(data.isactive)
      this.SolicitudForm = this.builder.group({
        Asunto: this.builder.control({value: data.asunto, disabled:true},Validators.required),
        Fecha: this.builder.control({value: data.created, disabled:true},Validators.required),
        Descripcion: this.builder.control({value: data.description, disabled:true},Validators.required),
        Area: this.builder.control({value:'',disabled:true},Validators.required),
        

      })
    }
    )
  }
  getSolicitudes() {
    this.service.getUser(sessionStorage.getItem('username')).subscribe((data: any) => {
      this.solicitudes = data.solicitudes
      console.log(data)
    })
  }
}
