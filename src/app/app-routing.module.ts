import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { DetailsComponent } from "./components/details/details.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
