import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tareapopup',
  templateUrl: './tareapopup.component.html',
  styleUrls: ['./tareapopup.component.css']
})
export class TareapopupComponent {
  checkboxValue: any;
  InfoTarea:any;
  constructor(public dialogRef: MatDialogRef<TareapopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service:AuthService, private toastr:ToastrService) { 
    
    this.getInfo()
  }


  
  getInfo(){
    this.InfoTarea = {}
    this.checkboxValue = false
    this.service.getTarea(this.data.ID).subscribe((data:any)=>{
    this.InfoTarea = data 
    this.checkboxValue = this.InfoTarea.completado
  })
  console.log(this.InfoTarea)
}
Close(){
  this.dialogRef.close()
}
  Entrega(estado:boolean){
    this.service.updateEstado(this.data.ID, estado).subscribe((data:any)=>{
      this.toastr.success('Tarea actualizada correctamente')
    })
  }

  actualizarCheckbox(valor: boolean) {
    this.checkboxValue = valor;
  }
}
