import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Bloc} from "../../../core/Models/Bloc/bloc";
import {Router} from "@angular/router";
import {BlocService} from "../../../core/service/bloc/bloc.service";
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";
import {ChambreService} from "../../../core/service/Chambre/chambre.service";
import {Chambre} from "../../../core/Models/Chambre/chambre";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-bloc',
  templateUrl: './ajouter-bloc.component.html',
  styleUrls: ['./ajouter-bloc.component.css']
})
export class AjouterBlocComponent implements OnInit{
  blocForm!:FormGroup;
  showSuccessAlert: boolean = false;
  newblocc!:Bloc;
 

  constructor(private fb: FormBuilder, private blocService: BlocService, private router: Router) {}

  ngOnInit() {
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: ['', Validators.required],
    });
  }
  addBloc() {
    if (this.blocForm.valid) {
      this.newblocc = this.blocForm.value;
      console.log(this.newblocc);
  
      this.blocService.addBloc(this.newblocc).subscribe(
        (addedBloc) => {
          console.log('Bloc ajouté avec succès :', addedBloc);
          this.showSuccessAlert = true;
  
          setTimeout(() => {
            this.router.navigate(['dashboard/allblocs']);
          }, 2000);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du bloc :', error);
  
          // Log the complete error response
          if (error instanceof HttpErrorResponse) {
            console.error('Complete error response:', error);
          }
        }
      );
    }
  }

 
}
