import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../services/projet.service';
import { LoggingService } from '../services/logging.service';
import { Domaine } from '../model/domaine.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  newProjet = new Projet();
  domaines! : Domaine[];
  newIdDom! : number;
  newDomaine! : Domaine;


  constructor(private projetService:ProjetService,
              private loggingService: LoggingService,
              private router :Router){}
  ngOnInit() {
    this.domaines = this.projetService.listeCategories();
  }
  addProjet(){

    this.newDomaine= this.projetService.consulterDomaine(this.newIdDom);
    this.newProjet.domaine= this.newDomaine;
    this.projetService.ajouterProjet(this.newProjet);
    this.router.navigate(['projets']);
    this.loggingService.log('Projet ajoutée');
    }





}
