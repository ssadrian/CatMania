import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "src/app/services/auth.service";
import {LoginData} from "src/app/interfaces/login-data.interface";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})

export class LoginPageComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.onSubmit();
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  });

  onSubmit(): void {
    const mail: string | null = "test@test" ?? this.loginForm.controls["email"].value;
    const pass: string | null = "2" ?? this.loginForm.controls["password"].value;

    const logData: LoginData = {
      email: mail ?? "",
      password: pass ?? ""
    };

    this.authService.login(logData)
      .subscribe({
        error: (e) => console.error(e),
        complete: () => this.router.navigate(["/"])
      });
  }
}
