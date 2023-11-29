import { ProjetService } from './../services/projet.service';
import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  constructor(private projetService: ProjetService) { }

  allProjets!: Projet[] ;
   nomProjet!: string;
  projets! : Projet[];

  ngOnInit(): void {
   this.projets = this.projetService.ListeProjets();
  }
   rechercherFilm() {
    const projetsTrouves = this.projetService.rechercherParNom(this.nomProjet);
    this.projets = projetsTrouves;
    console.log(projetsTrouves);
   }
   onKeyUp(filterText : string){
     this.projets = this.allProjets.filter(item =>
     item?.nomProjet?.toLowerCase().includes(filterText));
     }
}


