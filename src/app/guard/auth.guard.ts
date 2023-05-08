import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router, private toastr: ToastrService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.isLoggedIn()) {
      if (route.url.length > 0) {
        let menu = route.url[0].path;
        if (menu === 'DashboardAdmin' || menu === 'trabajadores' || menu === "register") {
          if (sessionStorage.getItem('userrole') === 'Admin') {
            return true;
          } else {
            this.router.navigate(['Dashboard']);
            this.toastr.error('No tienes permisos para acceder a esta área');
            return false;
          }
        }else{
          return true;
        }
      }
    } else {
      this.router.navigate(['']);
      this.toastr.error('Debes iniciar sesión para acceder a esta área');
      return false;
    }
    return false; // Agregue esta declaración de retorno para manejar todos los caminos posibles
  }
}
