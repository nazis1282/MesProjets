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
  projets!: Projet[];
  IdDomaines: number | undefined; // Make sure IdDomaines is properly typed
  domaines!: Domaine[];

  constructor(private projetService: ProjetService) {}

  onChange() {
    console.log('IdDomaines:', this.IdDomaines);

    // Ensure IdDomaines is defined before making the service call
    if (this.IdDomaines  && !isNaN(this.IdDomaines)) {
      this.projetService.rechercherParDomaine(this.IdDomaines)
        .subscribe(projs => {
          this.projets = projs;
        });
    }else {
      console.error('idMarque is not a valid number. Cannot make the request.');
    }
  }

  ngOnInit(): void {
    this.projetService.listeDomaines()
      .subscribe(doms => {
        this.domaines = doms;
        console.log(doms);
      });
  }
}
