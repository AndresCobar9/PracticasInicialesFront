import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicacionesVentanaComponent } from '../publicaciones-ventana/publicaciones-ventana.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http:HttpClient) { }
  apiurl='https://backendpracticas-production.up.railway.app/user'

  GetAll(){
    return this.http.get(this.apiurl + '/userslist')
  }
  
  login(user:any){
    return this.http.post(this.apiurl+'/login',user)
  }
  deletePublicacion(id: any) {
    return this.http.delete(this.apiurl + '/deletepublicacion/' + id)
  }

  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl + '/register', inputdata)
  }

  getUser(username:any){
    return this.http.get(this.apiurl + '/get/' + username)
  }
  getUserID(username:any){
    return this.http.get(this.apiurl + '/getid/' + username)
  }
  getArea(area:any){
    return this.http.get(this.apiurl + '/getpublicacion/<Object:area>' , area)
  }

  getSolicitudesUser(id:any){
    return this.http.get(this.apiurl + '/getsolicitudes/' + id)
  }
  getPublicaciones(){
    return this.http.get(this.apiurl + '/getpublicaciones')
  }
  registrarSolicitud(solicitud:any){
    return this.http.post(this.apiurl + '/addsolicitud', solicitud)
  }

  getSolicitudID(id:any){
    return this.http.get(this.apiurl + '/getsolicitud/' + id)
  }
  registrarPublicacion(publicacion:any){
    return this.http.post(this.apiurl + '/addpublicacion', publicacion)
  }
  updateUser(user: any, id:any): Observable<any> { 

    return this.http.put(this.apiurl + '/update/' + id, user)
  }
  getTarea(id:any){
    return this.http.get(this.apiurl + '/gettarea/' + id)
  }
  updateEstado(id: any, estado: any) {
    const body = { estado: estado }; // Asegúrate de que 'estado' esté dentro de un objeto JSON.
    return this.http.put(this.apiurl + '/updatetarea/' + id, body);
  }
  updateEstadoSolicitud(id: any, estado: any) {
    const body = { estado: estado }; // Asegúrate de que 'estado' esté dentro de un objeto JSON.
    return this.http.put(this.apiurl + '/updatesolicitud/' + id, body);
  }

  registrarTarea(tarea:any , id:any){
    return this.http.post(this.apiurl + '/addtarea/' + id , tarea)
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    
    if (token != null) {
      const req = this.parseJwt(token);
      return req != null;
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
    return this.http.put(this.apiurl +'/updatepassword/' + password.id, password);
  }
  logout() {
    localStorage.removeItem('token');
    sessionStorage.clear();
  }
  GetUsername(){
    return sessionStorage.getItem('username')!=null?sessionStorage.getItem('username')?.toString():''  
  }
  GetUserrole(){

return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():''  }

    GetUserArea(){
    return sessionStorage.getItem('userarea')!=null?sessionStorage.getItem('userarea')?.toString():''
    }
}

