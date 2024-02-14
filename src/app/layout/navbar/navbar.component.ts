import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { AuthService } from "../../service/auth/auth.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public currentRoute= '';
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  deconnexion() {
    this.authService.logout().subscribe((message) => {
      this.router.navigate(['/']);
    });
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
