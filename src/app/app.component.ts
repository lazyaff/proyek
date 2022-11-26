import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Peminjaman', url: '/peminjaman', icon: 'cube' },
    { title: 'Buku', url: '/buku', icon: 'cube' },
    { title: 'Anggota', url: '/anggota', icon: 'cube' },
  ];
  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}


