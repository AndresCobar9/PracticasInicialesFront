import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PasswordUpdateComponent } from '../password-update/password-update.component';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  
  @ViewChild('switchInput') switchInput!: ElementRef<HTMLInputElement>;

  public id: any;
  user:any={}
  
  useri: any={};
  updateform: any;
  static id: any;
  ngOnInit(): void {
    this.id = this.data.ID;
    console.log(this.id);
    this.service.getUserID(this.data.ID).subscribe(
      (res: any) => {
        this.useri = res;
        console.log(this.useri);
        console.log(this.useri.value)
        this.updateform = this.builder.group({
          username: this.builder.control({ value: this.useri.username, disabled: true }, Validators.compose([Validators.required, Validators.minLength(3)])),
          name: this.builder.control({ value: this.useri.name, disabled: true }, Validators.required),
          email: this.builder.control({ value: this.useri.email, disabled: true }, Validators.compose([Validators.required, Validators.email])),
          gender: this.builder.control(this.useri.gender),
          role: this.builder.control({ value: this.useri.role, disabled: true }),
          isactive: this.builder.control(this.useri.autorizado),
          area: this.builder.control({ value: this.useri.area, disabled: true })
        });
      },
      (err) => {
        console.error(err);
      }
    )
  }
  constructor(private toastr:ToastrService,private service:AuthService, private router:Router, private route:ActivatedRoute, private builder: FormBuilder, private dialog:MatDialog, public dialogRef: MatDialogRef<EditarUsuarioComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.updateform = this.builder.group({
      username:this.builder.control({value: '', disabled:true},Validators.compose([Validators.required,Validators.minLength(3)]) ),
      name:this.builder.control({value: '', disabled:true},Validators.required),
      email:this.builder.control({value: '', disabled:true},Validators.compose([Validators.required,Validators.email])),
      gender:this.builder.control(this.useri.gender),
      role:this.builder.control({value: '', disabled:true}),
      isactive:this.builder.control(this.useri.isactive),
      area:this.builder.control({value: '', disabled:true})
    })
  }  
  



  buildUpdateObject(): Record<string, any> {
    const updateObject: Record<string, any> = {};
  
    if (this.updateform.get('username')?.enabled) {
      updateObject['username'] = this.updateform.value.username;
    }
  
    if (this.updateform.get('name')?.enabled) {
      updateObject['name'] = this.updateform.value.name;
    }
  
    if (this.updateform.get('email')?.enabled) {
      updateObject['email'] = this.updateform.value.email;
    }
  
    if (this.updateform.get('gender')?.enabled) {
      updateObject['gender'] = this.updateform.value.gender;
    }
  
    if (this.updateform.get('role')?.enabled) {
      updateObject['role'] = this.updateform.value.role;
    }
  
    if (this.updateform.get('isactive')?.enabled) {
      updateObject['isactive'] = this.updateform.value.isactive;
    }
  
    return updateObject;
  }

  
  onSubmit() {
    
    if(this.updateform.valid){
      this.service.updateUser(this.updateform.value, this.data.ID).subscribe(res => {
       
          this.toastr.success('Usuario actualizado con éxito');
          this.dialogRef.close();
          
      });
    }else{
      for (const field in this.updateform.controls) {
        const control = this.updateform.get(field);
        if (control && control.errors) {
          this.toastr.warning(`Campo ${field} inválido: `, control.errors);
        }
      }
      this.toastr.warning('Ingresa los datos correctamente',)
    }
  }
  

  inputs = [
    { id: 'name', enabled: false },
    { id: 'role', enabled: false },
    { id: 'genero', enabled: false },
    { id: 'username', enabled: false },
    { id: 'email', enabled: false },
    { id: 'area', enabled: false }
    
  ];

  toggleInput(input: { id: string, enabled: boolean }) {
    const index = this.inputs.findIndex(i => i.id === input.id);
    const control = this.updateform.get(input.id);
    control?.enable({ emitEvent: false });
    this.inputs[index].enabled = !this.inputs[index].enabled;
    if (!this.inputs[index].enabled) {
      control?.disable({ emitEvent: false });
    }
  }
 
  ChangePassowrd(){
    this.dialog.open(PasswordUpdateComponent ,{
      data:{userid:this.id}
    })
    }

}
