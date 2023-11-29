import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { FormsModule } from '@angular/forms';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { LoggingComponent } from './logging/logging.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParDomaineComponent } from './recherche-par-domaine/recherche-par-domaine.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    LoggingComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParDomaineComponent,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
