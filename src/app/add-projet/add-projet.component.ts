import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../services/projet.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {
  newProjet = new Projet();

  constructor(private projetService:ProjetService,
              private loggingService: LoggingService
    ){}

  addProjet(){
    this.projetService.ajouterProjet(this.newProjet);
    this.loggingService.log('Projet ajoutée');
    }


  ngOnInit(): void {
  }

}
