import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpXsrfTokenExtractor,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headerName = 'Authorization';
    // const token = sessionStorage.getItem('Token');
    const token = "jsjsa"

    if (token !== null && !req.headers.has(headerName)) {
      req = req.clone({ withCredentials: true, headers: req.headers.set(headerName, `Bearer ${token}`) });
    }
    return next.handle(req);
  }
}
