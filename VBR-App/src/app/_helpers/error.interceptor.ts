import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Observable, catchError, throwError } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                if(error.error instanceof Error) {
                    console.log(error.error.message)   
                } else {
                    if(error.status == 401) {
                        this.authService.logout();
                        // this.router.navigateByUrl('/login'))
                    }
                }

                return throwError("Invalid Token, user logged out.")
            })
        )
    }
}