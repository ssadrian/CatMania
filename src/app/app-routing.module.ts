import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  {
    path: "",
    loadChildren: () =>
      import("./pages/pages.module")
        .then(x => x.PagesModule),
    canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
