import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, delay, Observable, retry, retryWhen, switchMap, take, tap, throwError } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { AuthService } from "../../../service/auth/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept');
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          console.log('403');
          return this.authService.refreshToken().pipe(
            switchMap(() => next.handle(req)),
            catchError((error: HttpErrorResponse) => {
              if (error.status === 403) {
                  this.authService.removeTokens();
                  this.router.navigate(['']);
                  return throwError(error);
              }
              console.log('COUCOU', error);
              return throwError(error);
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }
}
