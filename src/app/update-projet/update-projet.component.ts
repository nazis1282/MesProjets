import { ProjetService } from './../services/projet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Router } from '@angular/router';
import { LoggingService } from '../services/logging.service';
import { Domaine } from '../model/domaine.model';
@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {

domaines! : Domaine[];
updatedDomId! : number;


  currentProjet = new Projet();

  constructor(private activateRoute : ActivatedRoute ,
              private router : Router,
              private projetService : ProjetService,
              private loggingService: LoggingService
              ) { }


  updateProjet()
  {
  this.currentProjet.domaine=this.projetService.consulterDomaine(this.updatedDomId);
  this.projetService.updateProjet(this.currentProjet);
  this.router.navigate(['projets']);
  this.loggingService.log('Projet modifié');
  }

  ngOnInit() {
    this.domaines = this.projetService.listeCategories();
    this.currentProjet = this.projetService.consulterProjet(this.activateRoute.snapshot. params['id']);
    this.domaines = this.projetService.listeCategories();
   console.log(this.currentProjet);
  }

}
