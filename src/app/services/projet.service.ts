import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService{

  projets : Projet[];
  projet! : Projet;

  constructor() {
    this.projets =[
      {idProjet : 1 ,nomProjet : "aquiz" , startDate : new Date("01/14/2011") , manager : "ahmed" ,  Cout : 3000 },
      {idProjet : 2 ,nomProjet : "mayanimeliste" , startDate : new Date("02/14/2011") , manager : "bill"  , Cout : 2000},
      {idProjet : 3 ,nomProjet : "agame" , startDate : new Date("03/14/2011") , manager : "donald" , Cout : 4000 }

    ];
  }
  ListeProjets(): Projet[] {
  return this.projets;
  }

  ajouterProjet( proj: Projet){
    this.projets.push(proj);
    }

  supprimerProjet(proj :Projet){
    const index = this.projets.indexOf(proj, 0);
    if (index > -1) {
    this.projets.splice(index, 1);
  }
  }

  consulterProjet(id:number): Projet{
    this.projet = this.projets.find(p => p.idProjet == id)!;
    return this.projet;
    }

  trierProjets(){
    this.projets = this.projets.sort((n1,n2) => {
      if (n1.idProjet! > n2.idProjet!) {
      return 1;
      }
      if (n1.idProjet! < n2.idProjet!) {
      return -1;
      }
      return 0;
      });
  }



  updateProjet(p:Projet){
    this.supprimerProjet(p);
    this.ajouterProjet(p);
    this.trierProjets();
  }


}
