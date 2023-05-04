import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent {
  constructor(private router:Router, private route:ActivatedRoute, private builder: FormBuilder, private service:AuthService, @Inject(MAT_DIALOG_DATA) public data:any, private toastr: ToastrService){
    
  }
  public id:any
  ngOnInit(): void {
    console.log(this.data.id)
    
  }

  updateform=this.builder.group({
    id:this.data.userid,
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]*')]))
  })
  
 

  Update(){
    console.log(this.updateform.value)
    if(this.updateform.valid){
      this.service.updatePassword(this.updateform.value).subscribe(res => {
        this.toastr.success('Contraseña actualizada correctamente')
        this.router.navigateByUrl('Dashboard')
      })

        
    
    }

  }
}
