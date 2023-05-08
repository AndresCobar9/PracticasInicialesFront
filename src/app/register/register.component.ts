import { Component } from '@angular/core';
import { ParseSourceFile } from '@angular/compiler';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
hasError(arg0: string): any {
throw new Error('Method not implemented.');
}
  constructor(private builder: FormBuilder, private toastr:ToastrService , private service:AuthService,private router:Router) {
  }
    registerform=this.builder.group({
    username:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)]) ),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]*')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.builder.control('', Validators.required),
    role:this.builder.control(''),
    area:this.builder.control('',Validators.required),
    isactive:this.builder.control(false)
  })
  proceedregistration(){
    
    if(this.registerform.valid){
      this.service.Proceedregister(this.registerform.value).subscribe(res => {

        this.toastr.success('Usuario Registrado Correctamente','Registro Realizado correctamente')
        this.router.navigate(['/DashboardAdmin'])
      }, err => {
        if(err.status == 409){
          this.toastr.error('El usuario ya existe','Error')
        }
        else{
          this.toastr.error('Error al registrar','Error')
        }
        
      });
    }else{
      for (const field in this.registerform.controls) {
        const control = this.registerform.get(field);
        if (control && control.errors) {
          console.log(`Campo ${field} inválido: `, control.errors);
        }
      }
      this.toastr.warning('Ingresa los datos correctamente',)
    }
  }
}