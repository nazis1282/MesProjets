import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';

const routes: Routes = [
  {path: "projets", component : ProjetsComponent},
  {path: "add-projet", component :AddProjetComponent},
  { path: "", redirectTo: "projets", pathMatch: "full" },
  {path: "updateProjet/:id", component: UpdateProjetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
