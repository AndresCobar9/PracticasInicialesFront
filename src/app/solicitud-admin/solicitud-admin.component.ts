import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitud-admin',
  templateUrl: './solicitud-admin.component.html',
  styleUrls: ['./solicitud-admin.component.css']
})
export class SolicitudAdminComponent {
  checkboxValue: any;
  InfoTarea:any;

  constructor(private builder: FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router ,public dialogRef: MatDialogRef<SolicitudAdminComponent>, @Inject(MAT_DIALOG_DATA) public data: any,){
    this.InfoGet()
  }

  SolicitudForm = this.builder.group({
    
    Asunto: this.builder.control('',Validators.required),
    
    Descripcion: this.builder.control('',Validators.required),
   
    
  })

 InfoGet(){
  this.service.getSolicitudID(this.data.ID).subscribe((data:any)=>{

    this.SolicitudForm = this.builder.group({
      
      Asunto: this.builder.control({value: data.asunto, disabled:true},Validators.required),
      Descripcion: this.builder.control({value: data.description, disabled:true},Validators.required),
    })

    this.checkboxValue = data.autorizado
  }
  )
 }

 Entrega(estado:boolean){
  this.service.updateEstadoSolicitud(this.data.ID, estado).subscribe((data:any)=>{
    this.toastr.success('Solicitud actualizada correctamente')
  })
  
}

actualizarCheckbox(valor: boolean) {
  this.checkboxValue = valor;
}
  
}
