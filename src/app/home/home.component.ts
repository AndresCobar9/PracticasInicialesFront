import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:AuthService, private router: Router){}
  isLog(){
    if(this.service.isLoggedIn()){
      this.router.navigateByUrl('Dashboard');
    }else{
      this.router.navigateByUrl('login')
    }
  }
}
