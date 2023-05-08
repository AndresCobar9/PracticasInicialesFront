import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-preview',
  templateUrl: './solicitud-preview.component.html',
  styleUrls: ['./solicitud-preview.component.css']
})
export class SolicitudPreviewComponent {
  solicitudes: any
  estado: any = false
  id: any = 0
  filtroAutorizado: boolean | null = null;
    constructor(private builder: FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router) {
    this.getSolicitudes()
    this.filtroAutorizado = false; // Agregar esta línea

  }

  SolicitudForm = this.builder.group({
    
    Asunto: this.builder.control({value:'',disabled:true},Validators.required),
    Fecha: this.builder.control({value:'',disabled:true},Validators.required),
    Descripcion: this.builder.control({value:'',disabled:true},Validators.required),
    Area: this.builder.control({value:'',disabled:true},Validators.required),
    id: this.builder.control({value:'',disabled:true},Validators.required),
  })

  filtrarSolicitudes(estadoFiltro: boolean): void {
    this.solicitudes = this.solicitudes.filter((solicitud: any) => solicitud.autorizado === estadoFiltro);

  }

  ActualizarDatos(id:any){
    this.service.getSolicitudID(id).subscribe((data:any)=>{
      this.estado = data.autorizado
      this.id = data.id
      this.SolicitudForm = this.builder.group({
        id: this.builder.control({value: this.id, disabled:true},Validators.required),
        Asunto: this.builder.control({value: data.asunto, disabled:true},Validators.required),
        Fecha: this.builder.control({value: data.created, disabled:true},Validators.required),
        Descripcion: this.builder.control({value: data.description, disabled:true},Validators.required),
        Area: this.builder.control({value:'',disabled:true},Validators.required),
        
      })
    }
    )
  }
  getSolicitudes() {
    this.service.getSolicitudes().subscribe((data: any) => {
      this.solicitudes = data
      this.solicitudes.reverse()
      console.log(data)
    })
  }
  estadochange(estado:any,id:any){
    console.log(estado)
    if(estado == true){
      estado = false
    }
    else{
      estado = true
    }


    this.service.updateEstadoSolicitud(id, estado).subscribe((data:any)=>{
      this.toastr.success('Solicitud actualizada correctamente')
    })
    console.log("estees:"+id)
    console.log(estado)
    this.getSolicitudes()
    this.ActualizarDatos(id)
  }
}
