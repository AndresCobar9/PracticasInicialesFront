import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicacionesVentanaComponent } from '../publicaciones-ventana/publicaciones-ventana.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http:HttpClient, public jwtHelper: JwtHelperService) { }
  apiurl='https://backendpracticas-production.up.railway.app/user'

  GetAll(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/userslist',{ headers: headers })
  }
  
  login(user:any){
   
    return this.http.post(this.apiurl+'/login',user)
  }
  deletePublicacion(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(this.apiurl + '/deletepublicacion/' + id,{ headers: headers })
  }

  Proceedregister(inputdata:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiurl + '/register', inputdata , { headers: headers })
  }

  getUser(username:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/get/' + username , { headers: headers })
  }
  getUserID(username:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/getid/' + username, { headers: headers })
  }
  getArea(area:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/getpublicacion/' + area , { headers: headers })
  }

  getSolicitudesUser(id:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/getsolicitudes/' + id, { headers: headers })
  }

  getSolicitudesUserName(username:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/getsolicitudesuser/' + username , { headers: headers })
  }

  getSolicitudes(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl+'/getsolicitudes', { headers: headers })
  }
  getPublicaciones(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/getpublicaciones', { headers: headers })
  }
  registrarSolicitud(solicitud:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiurl + '/addsolicitud', solicitud , { headers: headers })
  }

  getSolicitudID(id:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/getsolicitud/' + id, { headers: headers })
  }
  registrarPublicacion(publicacion:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiurl + '/addpublicacion', publicacion, { headers: headers })
  }
  updateUser(user: any, id:any): Observable<any> { 
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(this.apiurl + '/update/' + id, user, { headers: headers })
  }
  getTarea(id:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiurl + '/gettarea/' + id, { headers: headers })
  }
  updateEstado(id: any, estado: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { estado: estado }; // Asegúrate de que 'estado' esté dentro de un objeto JSON.
    return this.http.put(this.apiurl + '/updatetarea/' + id, body, { headers: headers });
  }
  updateEstadoSolicitud(id: any, estado: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { estado: estado }; // Asegúrate de que 'estado' esté dentro de un objeto JSON.
    return this.http.put(this.apiurl + '/updatesolicitud/' + id, body, { headers: headers });
  }

  registrarTarea(tarea:any , id:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiurl + '/addtarea/' + id , tarea, { headers: headers })
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
  
    if (token) {
      // Verifica que el token no haya expirado
      if (this.jwtHelper.isTokenExpired(token)) {
        // El token ha expirado, eliminar las credenciales almacenadas y redirigir al inicio de sesión
        this.logout();
        return false;
      }
      // El token es válido y no ha expirado
      return true;
    }
  
    return false;
  }
  
  parseJwt(token: string) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch (e) {
      return null;
    }
  }
  updatePassword(password:any): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(this.apiurl +'/updatepassword/' + password.id, password);
  }
  logout() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    localStorage.removeItem('token');
    sessionStorage.clear();
  }
  GetUsername(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return sessionStorage.getItem('username')!=null?sessionStorage.getItem('username')?.toString():''  
  }
  GetUserrole(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():''  }

    GetUserArea(){
    return sessionStorage.getItem('userarea')!=null?sessionStorage.getItem('userarea')?.toString():''
    }

  }

