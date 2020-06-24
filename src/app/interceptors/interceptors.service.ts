import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('content-type', 'application/json').set('authorization','barra '+ localStorage.getItem('data_product')),
     responseType: 'json',
    });

    return next.handle(req)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error

            errorMessage = `Error: ${error.error.message}`;

            
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}Message: ${error.error.errors}`;
           
           
          }
          return throwError(errorMessage);
        })
      );
  }
}
