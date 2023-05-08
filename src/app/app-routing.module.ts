import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './barra/barra.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SolicitudTrabajadorComponent } from './solicitud-trabajador/solicitud-trabajador.component';
import { TareasComponent } from './tareas/tareas.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { HistorialSolicitudesComponent } from './historial-solicitudes/historial-solicitudes.component';
import { SolicitudPreviewComponent } from './solicitud-preview/solicitud-preview.component';




const routes: Routes = [  
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent,canActivate:[AuthGuard] },
  {path: 'Dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path: 'users', component:TrabajadoresComponent,canActivate:[AuthGuard] },
  {path: 'update', component:EditarUsuarioComponent,canActivate:[AuthGuard] },
  {path: 'DashboardAdmin', component:DashboardAdminComponent,canActivate:[AuthGuard]},
  {path: 'publicaciones', component:PublicacionesComponent,canActivate:[AuthGuard]},
  {path: 'tareas', component:TareasComponent,canActivate:[AuthGuard]},
  {path: 'solicitud', component:SolicitudTrabajadorComponent,canActivate:[AuthGuard]},
  {path: 'trabajadores', component:TrabajadoresComponent,canActivate:[AuthGuard]},
  {path: 'Solicitudes', component:HistorialSolicitudesComponent,canActivate:[AuthGuard]},
  {path: 'SolicitudesAdmin', component:SolicitudPreviewComponent,canActivate:[AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
