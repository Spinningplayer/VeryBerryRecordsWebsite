import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginFailed = false;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  

  constructor(private authService: AuthService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  login() {
    this.authService.login(this.loginForm.controls['username'].value!, this.loginForm.controls['password'].value!)
    .then(user => {
      if(user.authToken != null) {
        let route = this.route.snapshot.queryParams['returnUrl'] || '/backstage/dashboard';
       this._router.navigateByUrl(route);
       this.loginFailed = false;
      } else {
        this.loginFailed = true;
      }
    })
  }
}
