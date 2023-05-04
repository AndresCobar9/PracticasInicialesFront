import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TareasAdminComponent } from '../tareas-admin/tareas-admin.component';

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
    }

    onClick(): void {
      this.dialogRef.close();
      this.dialog.open(TareasAdminComponent,{
        data: {ID:this.data.ID}
      })
    }
}
