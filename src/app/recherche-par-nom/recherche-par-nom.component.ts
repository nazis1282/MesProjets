import { ProjetService } from './../services/projet.service';
import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  projets! : Projet[];
  searchTerm!: string;
  nomProjet!: string;
  constructor(private projetservice: ProjetService
    ) {
    }
    ngOnInit(): void {
      this.projetservice.listeProjet().subscribe(
        (projs: Projet[]) => {
          this.projets = projs;
          console.log(projs);
        },
        (error) => {
          console.error('Error fetching projets:', error);
        }
      );
    }

}
