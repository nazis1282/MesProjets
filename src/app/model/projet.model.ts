import { Domaine } from "./domaine.model";

export class Projet {
  idProjet? : number;
  nomProjet? : string;
  startDate? : Date ;
  manager? : string;
  cout? : number;
  domaine!:Domaine;
  }
