import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let areCredentialsEmpty: boolean = this.authService.user.email === "" && this.authService.user.password === "";

    if (areCredentialsEmpty) {
      this.router.navigate(["login"])
        .then((_: boolean): boolean => false);
    }

    return true;
  }
}
