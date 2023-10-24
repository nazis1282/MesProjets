import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../services/projet.service';
@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projets : Projet[];

  constructor(private projetService: ProjetService ) {
    this.projets = projetService.ListeProjets();
  }

  supprimerProjet(p:Projet){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.projetService.supprimerProjet(p);
  }

  ngOnInit(): void {
  }

}
