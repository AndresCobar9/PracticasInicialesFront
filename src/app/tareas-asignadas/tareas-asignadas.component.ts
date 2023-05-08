import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TareasPopupComponent } from '../tareas-popup/tareas-popup.component';

@Component({
  selector: 'app-tareas-asignadas',
  templateUrl: './tareas-asignadas.component.html',
  styleUrls: ['./tareas-asignadas.component.css']
})
export class TareasAsignadasComponent {
  solicitudes: any
  estado: any = false
  id: any = 0

  filtroAutorizado: boolean | null = null;
    constructor(private builder: FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router, public dialogRef: MatDialogRef<TareasPopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog) {
    this.getSolicitudes()
    this.filtroAutorizado = null;

  }



  filtrarSolicitudes(estadoFiltro: boolean): void {
    this.solicitudes = this.solicitudes.filter((solicitud: any) => solicitud.completado === estadoFiltro);

  }

  ActualizarDatos(id:any){
    this.service.getSolicitudID(id).subscribe((data:any)=>{
  
        
    
    }
    )
  }
  getSolicitudes() {
    console.log(this.data.username)
    this.service.getUser(this.data.username).subscribe((data: any) => {
      console.log(data.tareas)
      this.solicitudes = data.tareas
      this.estado = this.solicitudes.completado
      
    })
  }
  
}
