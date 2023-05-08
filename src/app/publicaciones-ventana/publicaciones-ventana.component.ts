import { Component,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicaciones-ventana',
  templateUrl: './publicaciones-ventana.component.html',
  styleUrls: ['./publicaciones-ventana.component.css']
})
export class PublicacionesVentanaComponent {
PublicacionForm:any;
constructor(public dialogRef: MatDialogRef<PublicacionesVentanaComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private builder: FormBuilder, private service:AuthService, private toastr:ToastrService, private router:Router) { 
  this.creado = new Date().toISOString().split('T')[0];
  this.PublicacionForm = this.builder.group({
    titulo: this.builder.control('',Validators.required),
    descripcion: this.builder.control('',Validators.required),
    created: this.builder.control(this.creado,Validators.required),
    area: this.builder.control('',Validators.required),
    autor: this.builder.control(sessionStorage.getItem('name'),Validators.required),
  })
 

}
  creado:any;
 
  registraPublicacion() {
    // Verifica si el formulario es válido
    if (this.PublicacionForm.valid) {
      this.service.registrarPublicacion(this.PublicacionForm.value).subscribe((data: any) => {
        this.toastr.success('Publicación creada con éxito');
        this.dialogRef.close();
      });
    } else {
      // Muestra una notificación si hay campos vacíos
      this.toastr.error('Por favor, completa todos los campos', 'Campos vacíos');
    }
  }
  
  }
