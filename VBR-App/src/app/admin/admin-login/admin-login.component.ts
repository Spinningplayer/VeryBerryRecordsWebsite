import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
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
    console.log("username: "+ this.loginForm.controls['username'].value)
    console.log("password: "+ this.loginForm.controls['password'].value)
    this.authService.login(this.loginForm.controls['username'].value!, this.loginForm.controls['password'].value!)
    .then(user => {
      console.log(user)
      if(user.authToken != null) {
        let route = this.route.snapshot.queryParams['returnUrl'] || '/admin';
        console.log(route);
       this._router.navigateByUrl(route);
       this.loginFailed = false;
      } else {
        console.log("login failed");
        this.loginFailed = true;
      }
    })
  }
}
