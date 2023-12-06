import { Projet } from './../model/projet.model';
import { Domaine } from './../model/domaine.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )};

@Injectable({
  providedIn: 'root'
})
export class ProjetService{

  apiURL: string = 'http://localhost:8070/projets/api';

  projets! : Projet[];
  projet! : Projet;
  domaines! : Domaine[];

  constructor(private http : HttpClient) {
    /*this.domaines = [  {idDom : 1, nomDom : "indistreulle"},
                       {idDom : 3, nomDom : "education"},
                       {idDom : 2, nomDom : "informatique"}];

    this.projets =[
      {idProjet : 1 ,nomProjet : "classds" , startDate : new Date("01/14/2011") , manager : "ahmed" ,  Cout : 3000 , domaine :{idDom : 3, nomDom : "education"  }},
      {idProjet : 2 ,nomProjet : "mayanimeliste" , startDate : new Date("02/14/2011") , manager : "bill"  , Cout : 2000 , domaine :{idDom : 2, nomDom : "informatique"  }},
      {idProjet : 3 ,nomProjet : "agame" , startDate : new Date("03/14/2011") , manager : "donald" , Cout : 4000 ,domaine: {idDom : 2,nomDom : "informatique"}},
      {idProjet :4  ,nomProjet : "residence chevalier" , startDate : new Date("03/14/2011") , manager : "feres" , Cout : 445000 ,domaine: {idDom : 1,nomDom : "indistreulle"}}

    ];*/
  }

  rechercherParDomaine(idDom: number):Observable< Projet[]> {
    const url = `${this.apiURL}/domaine/${idDom}`;
    return this.http.get<Projet[]>(url);
    }

  listeProjet(): Observable<Projet[]>{
    return this.http.get<Projet[]>(this.apiURL);
    }

  listeDomaines(): Observable<Domaine[]> {
    return this.http.get<Domaine[]>(this.apiURL+"/dom");    }


    ajouterProjet( proj: Projet):Observable<Projet>{
      return this.http.post<Projet>(this.apiURL, proj, httpOptions);
      }

  supprimerProjet(id : number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterProjet(id: number): Observable<Projet> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Projet>(url);
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



  updateProjet(proj:Projet): Observable<Projet>
  {
    return this.http.put<Projet>(this.apiURL, proj, httpOptions);
  }


}
