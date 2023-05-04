import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SolicitudAdminComponent } from '../solicitud-admin/solicitud-admin.component';

@Component({
  selector: 'app-solicitudespop',
  templateUrl: './solicitudespop.component.html',
  styleUrls: ['./solicitudespop.component.css']
})
export class SolicitudespopComponent   implements  OnInit{
  Solicitudes: any; 
  constructor(private dialog: MatDialog ,private builder: FormBuilder, private toastr:ToastrService ,private _liveAnnouncer: LiveAnnouncer, private service:AuthService,private router:Router , public dialogRef: MatDialogRef<SolicitudespopComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) 
  {
  }

    dataSource: any
    
    
  
    ngOnInit(): void {
      this.loadsolicitudes(this.data.ID)
    }
    

   
  
    
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    solicitudpop(id:any){
      this.dialog.open(SolicitudAdminComponent,{
        data: {ID:id}
      }).afterClosed().subscribe(result => {
        this.loadsolicitudes(this.data.ID)
      }
      )
    }
  
  
    loadsolicitudes(id:any){
  
      this.service.getUserID(this.data.ID).subscribe(
        (res: any) => {
          
          this.Solicitudes = res.solicitudes
          this.dataSource =new MatTableDataSource(this.Solicitudes)
          
        },
        (err) => {
          console.error(err);
        }
      );
    }
  
    displayedColumns: string[] = ['ID','Nombre','Area', 'Solicitud']
    
  
  }

