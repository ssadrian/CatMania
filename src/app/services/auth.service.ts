import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {filter, Observable} from "rxjs";
import {LoginData} from "../interfaces/login-data.interface";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  fakeUrl: string = "assets/serverFake.json";
  user: LoginData = {email: "", password: ""};

  constructor(private http: HttpClient) {
  }

  login(data: LoginData): Observable<LoginData> {
    return this.http
      .get<LoginData>(this.fakeUrl)
      .pipe(filter((value: any): boolean => {
          let found: boolean = false;

          for (let i: number = 0; i < value.length; i++) {
            if (value[i].email == data.email
              && value[i].password == data.password) {
              this.user = {
                email: value[i].email,
                password: value[i].password,
              };

              found = true;
              break;
            }
          }

          return found;
        })
      );
  }
}
