import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TareasAdminComponent } from '../tareas-admin/tareas-admin.component';
import { TareasAsignadasComponent } from '../tareas-asignadas/tareas-asignadas.component';

@Component({
  selector: 'app-tareas-popup',
  templateUrl: './tareas-popup.component.html',
  styleUrls: ['./tareas-popup.component.css']
})
export class TareasPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<TareasPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog) {
      console.log(data.ID)
      console.log(data.username)
      console.log(data)
    }

    onClick(): void {
      this.dialogRef.close();
      this.dialog.open(TareasAdminComponent,{
        data: {ID:this.data.ID}
      })
    }

    onClick2(): void {
      console.log(this.data)
      this.dialogRef.close();
      this.dialog.open(TareasAsignadasComponent,{
        
        data: {username:this.data.Username}

      })
    }
}
