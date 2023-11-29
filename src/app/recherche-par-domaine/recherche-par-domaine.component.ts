import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Domaine } from '../model/domaine.model';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-recherche-par-domaine',
  templateUrl: './recherche-par-domaine.component.html',
  styleUrls: ['./recherche-par-domaine.component.css']
})
export class RechercheParDomaineComponent implements OnInit {

  projets!: Projet[] ;
  IdDomaines!: number;
  domaines!: Domaine[] ;

  constructor(private projetService: ProjetService) { }


  onChange() {
      this.projets = this.projetService.rechercherParDomaine(this.IdDomaines);
      console.log(this.projets);
  }

  ngOnInit(): void {
    this.domaines = this.projetService.listeDomaines();
    console.log(this.domaines);
  }
}
