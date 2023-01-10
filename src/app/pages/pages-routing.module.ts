import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {MainPageComponent} from "./main-page/main-page.component";

export const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "main", component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
