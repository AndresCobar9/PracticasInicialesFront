import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatIconModule} from '@angular/material/icon';
import { TareasPopupComponent } from '../tareas-popup/tareas-popup.component';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { SolicitudespopComponent } from '../solicitudespop/solicitudespop.component';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements  OnInit{

  dataSource: any
  constructor(private service:AuthService, private dialog:MatDialog, private _liveAnnouncer: LiveAnnouncer, ){

    
    
  }

  ngOnInit(): void {
    this.loaduser()
  }
  
 tareaspop(id:any){
  this.dialog.open(TareasPopupComponent,{
    data: {ID:id}
  })
 }

 infopop(id:any){
  this.dialog.open(EditarUsuarioComponent,{
    data: {ID:id}
  })}
solicitudpop(id:any){
  this.dialog.open(SolicitudespopComponent,{
    data: {ID:id}
  })
}
  paciente:any={}

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  loaduser(){

    this.service.GetAll().subscribe(
      (res: any) => {
        
        this.paciente = res.users;
        this.dataSource =new MatTableDataSource(this.paciente)
        
      },
      (err) => {
        console.error(err);
      }
    );
  }

  displayedColumns: string[] = ['ID','Nombre','Genero','Usuario','Area', 'Tareas', 'Solicitudes', 'Informacion']
  

}

