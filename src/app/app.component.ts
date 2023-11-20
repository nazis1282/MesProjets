import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MesProjets';
  constructor (public authService: AuthService , private router:Router) {}

  onLogout() {
    this.authService.logout();
  }
  ngOnInit(): void {
    let isloggedin: string = localStorage.getItem('isloggedIn') ?? '';
    let loggedUser: string | null = localStorage.getItem('loggedUser');

    if (isloggedin !== 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      if (loggedUser) {
        this.authService.setLoggedUserFromLocalStorage(loggedUser);
      }
    }
  }

}

