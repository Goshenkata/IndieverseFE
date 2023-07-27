import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = localStorage.getItem('token')
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }
    return next.handle(authReq).pipe(catchError(err => {
      if (!authReq.url.includes('/login') && (err.status == 401 || err.status == 403)) {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        this.router.navigateByUrl('/login')
        return next.handle(req)
      }

      return throwError(err);
    }));
  }

  private addTokenHeader(req: HttpRequest<any>, token: string) {
    return req.clone({
      headers: req.headers.set("Authorization",
        "Bearer " + token)
    });
  }
}
