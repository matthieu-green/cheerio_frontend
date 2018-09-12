import { CanActivate } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{

    if(localStorage.getItem('admin') == 'true'){
      return true;
    }else{
      this.router.navigate(['']);
    }

  }
}
