import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = "f48f8e53d6c26c251f81ef3ee81fb826f90225f8";

    request = request.clone({setHeaders: {Authorization: 'Bearer '+ TOKEN}})
    return next.handle(request).pipe(catchError((error: HttpErrorResponse)=> {
      return throwError(error);
    } ));
  }
}
