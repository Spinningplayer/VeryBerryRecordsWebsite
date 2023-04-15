import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this._router.navigateByUrl("/login");
  }
}
