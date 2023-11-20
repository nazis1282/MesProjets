import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProjetGuard } from './projet.guard';

const routes: Routes = [
  {path: "projets", component : ProjetsComponent},
  {path: "add-projet", component :AddProjetComponent},
  { path: "", redirectTo: "projets", pathMatch: "full" },
  {path: "updateProjet/:id", component: UpdateProjetComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-projet", component : AddProjetComponent, canActivate:[ProjetGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
