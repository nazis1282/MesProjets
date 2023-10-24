import { ProjetService } from './../services/projet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Router } from '@angular/router';
import { LoggingService } from '../services/logging.service';
@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {

  currentProjet = new Projet();

  constructor(private activateRoute : ActivatedRoute ,
              private router : Router,
              private projetService : ProjetService,
              private loggingService: LoggingService
              ) { }


  updateProjet()
  {
  this.projetService.updateProjet(this.currentProjet);
  this.router.navigate(['projets']);
  this.loggingService.log('Projet modifié');
  }

  ngOnInit() {
    this.currentProjet = this.projetService.consulterProjet(this.activateRoute.snapshot. params['id']);
  console.log(this.currentProjet);
  }

}
