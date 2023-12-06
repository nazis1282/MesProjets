import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../services/projet.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projets? : Projet[];

  constructor(private projetService: ProjetService , public authService: AuthService ) {
    //this.projets = projetService.listeProjet();
  }

  chargerProjets(){
    this.projetService.listeProjet().subscribe(projs => {
    this.projets = projs;
    console.log(projs);
    });
    }

  supprimerProjet(p:Projet){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.projetService.supprimerProjet(p.idProjet!).subscribe(() => {
      console.log("projet supprimé");
      this.chargerProjets();
      });

  }

  ngOnInit(): void {
      this.chargerProjets();
    }
}
