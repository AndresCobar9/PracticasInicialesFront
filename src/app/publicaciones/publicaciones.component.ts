import { Component, OnInit} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PublicacionesVentanaComponent } from '../publicaciones-ventana/publicaciones-ventana.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent {
  
  publicaciones:any;
  areaForm:any;
  user:any;
  constructor(private service:AuthService,public dialog:MatDialog,private builder: FormBuilder, private toastr: ToastrService) { 
    if(sessionStorage.getItem('area') == 'Administracion'){
      this.getPublicaciones();
    }else{
      this.getPublicacionesArea();
    }
    
    this.user = sessionStorage
    
   }
   


getPublicaciones(){  
  this.service.getPublicaciones().subscribe((data:any)=>{
    this.publicaciones = data.publicaciones;
    this.publicaciones.reverse();
  }) 
}

getPublicacionesArea(){
  this.service.getArea(this.areaForm.value).subscribe((data:any)=>{
    this.publicaciones = data.publicaciones;
    this.publicaciones.reverse();
  })
}
openPublicaciones(){
  this.dialog.open(PublicacionesVentanaComponent,{
  
   
  })
}

delete(id:any){
  this.service.deletePublicacion(id).subscribe((data:any)=>{
    this.getPublicaciones();
    this.toastr.success('Publicacion eliminada con exito');
  })
}

addPublicacion(){
 this.dialog.open(PublicacionesVentanaComponent,{
 }
 )
}
}
  
  

