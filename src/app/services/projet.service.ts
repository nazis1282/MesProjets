import { Projet } from './../model/projet.model';
import { Domaine } from './../model/domaine.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService{

  projets : Projet[];
  projet! : Projet;
  domaines : Domaine[];

  constructor() {
    this.domaines = [  {idDom : 1, nomDom : "indistreulle"},
                       {idDom : 3, nomDom : "education"},
                       {idDom : 2, nomDom : "informatique"}];

    this.projets =[
      {idProjet : 1 ,nomProjet : "classds" , startDate : new Date("01/14/2011") , manager : "ahmed" ,  Cout : 3000 , domaine :{idDom : 3, nomDom : "education"  }},
      {idProjet : 2 ,nomProjet : "mayanimeliste" , startDate : new Date("02/14/2011") , manager : "bill"  , Cout : 2000 , domaine :{idDom : 2, nomDom : "informatique"  }},
      {idProjet : 3 ,nomProjet : "agame" , startDate : new Date("03/14/2011") , manager : "donald" , Cout : 4000 ,domaine: {idDom : 2,nomDom : "informatique"}}

    ];
  }

  rechercherParNom(nomProduit: string): Observable<Projet[]> {
    const filteredProducts = this.projets.filter(projet =>
      projet.nomProjet.toLowerCase().includes(nomProduit.toLowerCase())
    );
    return of(filteredProducts);
  }
  rechercherParDomaine(idDom: number): Projet[] {
    const filteredProjects = this.projets.filter((proj) => proj.domaine.idDom === idDom);
    console.log(filteredProjects);
    return filteredProjects;
  }

  ListeProjets(): Projet[] {
  return this.projets;
  }
  listeDomaines(): Domaine[] {
    return this.domaines;
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

    consulterDomaine(id:number): Domaine{
      return this.domaines.find(dom => dom.idDom == id)!;
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
