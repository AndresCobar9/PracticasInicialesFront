import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudselector',
  templateUrl: './solicitudselector.component.html',
  styleUrls: ['./solicitudselector.component.css']
})
export class SolicitudselectorComponent {
  constructor(
    public dialogRef: MatDialogRef<SolicitudselectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog, private router:Router) {
      
    }

    onClick(): void {
      this.dialogRef.close();
      this.router.navigate(["/solicitud"])
    }
    onClick2(): void {
      this.dialogRef.close();
      this.router.navigate(["/Solicitudes"])
    }
}
