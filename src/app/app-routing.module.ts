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




const routes: Routes = [  
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent, },
  {path: 'Dashboard', component:DashboardComponent,},
  {path: 'users', component:TrabajadoresComponent, },
  {path: 'update', component:EditarUsuarioComponent, },
  {path: 'DashboardAdmin', component:DashboardAdminComponent,},
  {path: 'publicaciones', component:PublicacionesComponent,},
  {path: 'tareas', component:TareasComponent},
  {path: 'solicitud', component:SolicitudTrabajadorComponent},
  {path: 'trabajadores', component:TrabajadoresComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
