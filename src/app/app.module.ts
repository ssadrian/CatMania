import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {PrimeNGConfig} from "primeng/api";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "./services/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    RippleModule
  ],
  providers: [PrimeNGConfig, AuthService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
