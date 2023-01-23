import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {PrimeNGConfig} from "primeng/api";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {SliderModule} from "primeng/slider";
import {InputNumberModule} from "primeng/inputnumber";
import {TooltipModule} from "primeng/tooltip";
import {ImageModule} from "primeng/image";
import {CarouselModule} from "primeng/carousel";
import {GalleriaModule} from "primeng/galleria";

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
    RippleModule,
    SliderModule,
    FormsModule,
    InputNumberModule,
    TooltipModule,
    ImageModule,
    CarouselModule,
    GalleriaModule,
  ],
  providers: [PrimeNGConfig, AuthService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
