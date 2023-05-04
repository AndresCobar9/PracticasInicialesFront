import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerInterceptor } from './spinner/spinnerInterceptor';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SpinnerModule } from './spinner/spinner.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarraComponent } from './barra/barra.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionesVentanaComponent } from './publicaciones-ventana/publicaciones-ventana.component';
import { MaterialModule } from './material.model';
import { TareasComponent } from './tareas/tareas.component';
import { TareapopupComponent } from './tareapopup/tareapopup.component';
import { SolicitudTrabajadorComponent } from './solicitud-trabajador/solicitud-trabajador.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { TareasAdminComponent } from './tareas-admin/tareas-admin.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TareasPopupComponent } from './tareas-popup/tareas-popup.component';
import { HistorialSolicitudesComponent } from './historial-solicitudes/historial-solicitudes.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { SolicitudespopComponent } from './solicitudespop/solicitudespop.component';
import { SolicitudAdminComponent } from './solicitud-admin/solicitud-admin.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DashboardComponent,
        BarraComponent,
        RegisterComponent,
        DashboardAdminComponent,
        PublicacionesComponent,
        TareasComponent,
        TareapopupComponent,
        SolicitudTrabajadorComponent,
        TrabajadoresComponent,
        PublicacionesVentanaComponent,
        TareasAdminComponent,
        TareasPopupComponent,
        HistorialSolicitudesComponent,
        EditarUsuarioComponent,
        PasswordUpdateComponent,
        SolicitudespopComponent,
        SolicitudAdminComponent
        


    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SpinnerModule,
        MaterialModule,
        ToastrModule.forRoot(),
        FullCalendarModule
        
    ]
})
export class AppModule { }
