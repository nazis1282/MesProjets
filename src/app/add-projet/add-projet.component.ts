import { Projet } from './../model/projet.model';
import { Component, OnInit } from '@angular/core';
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
    this.projetService.listeDomaines().subscribe(cats => {this.domaines = cats;
      console.log(cats);
      });
  }
  addProjet(){
    this.newProjet.domaine = this.domaines.find(dom => dom.idDom == this.newIdDom)!;
    this.projetService.ajouterProjet(this.newProjet).subscribe(proj => {
    console.log(proj);
    this.router.navigate(['projets'])});
    }
}
