import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { StyleManagerService } from '../services/style-manager.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isDark!: boolean;
  constructor(private authService: AuthService, private _router: Router, private styleManger: StyleManagerService) { }

  ngOnInit(): void {
    this.isDark = this.styleManger.isDark;
  }

  logout() {
    this.authService.logout();
    this._router.navigateByUrl("/login");
  }

  toggleDarkTheme() {
    console.log("toggle style")
    this.styleManger.toggleDarkTheme();
    this.isDark = this.styleManger.isDark;
  }
}
