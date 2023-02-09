import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LoginServiceService } from '../_services/login-service.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router: Router, private loginService: LoginServiceService) {
    
  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.loginService.hasToken()) {
      request = request.clone({
        setHeaders: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Authorization': `Bearer ${this.loginService.getToken()}`,
        },
      });
    }
    return next.handle(request)
    .pipe(catchError(err => this.errorHandler(err)));;
  }

  errorHandler(err: HttpErrorResponse) {
    if (err instanceof HttpErrorResponse) {
      console.log("Errr status >> " + err.status)
      if (err.status === 0) {
        // this.router.navigate(['/'], { queryParams: { returnUrl: '' } });
      }
  }
    return throwError(err.message || "server error.");
}
}
