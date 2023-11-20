import { Domaine } from "./domaine.model";

export class Projet {
  idProjet? : number;
  nomProjet? : string;
  startDate? : Date ;
  manager? : string;
  Cout?:number;
  domaine!:Domaine;
  }
