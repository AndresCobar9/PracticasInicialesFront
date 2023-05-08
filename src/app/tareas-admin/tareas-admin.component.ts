import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tareas-admin',
  templateUrl: './tareas-admin.component.html',
  styleUrls: ['./tareas-admin.component.css']
})
export class TareasAdminComponent implements OnInit{
  UserInfo:any={}
  constructor(private builder: FormBuilder, private toastr:ToastrService , private service:AuthService,private router:Router , public dialogRef: MatDialogRef<TareasAdminComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) 
  {
  }

  ngOnInit(): void {
    
    this.service.getUserID(this.data.ID).subscribe((data:any)=>{
    this.UserInfo = data
    this.actualizarDatos()
    })
    
  }

    TareaForm=this.builder.group({
    Username:this.builder.control('',Validators.required ),
    Name:this.builder.control('',Validators.required),
    Tarea: this.builder.control('',Validators.required),
    Descripcion: this.builder.control('',Validators.required),
    Fecha: this.builder.control('',Validators.required),
  })

  
  actualizarDatos(){
    this.TareaForm=this.builder.group({
      Username:this.builder.control({value:this.UserInfo.username, disabled:true},Validators.required ),
      Name:this.builder.control({value: this.UserInfo.name, disabled:true},Validators.required),
      Tarea: this.builder.control('',Validators.required),
      Descripcion: this.builder.control('',Validators.required),
      Fecha: this.builder.control('',Validators.required),
    })
   
  }

  RegistrarTarea(){
    this.service.registrarTarea(this.TareaForm.value, this.data.ID).subscribe((data:any)=>{
      console.log(data)
      this.toastr.success('Tarea registrada correctamente')
      this.dialogRef.close()
    })
  }
}
