import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.authService.currentUserValue();
        currentUser = currentUser as User;
        if (currentUser && currentUser.authToken) {
            req = req.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.authToken}`
                }
            });
        }
        return next.handle(req)
    }
}