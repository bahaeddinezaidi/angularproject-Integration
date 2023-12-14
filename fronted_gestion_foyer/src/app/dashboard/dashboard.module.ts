import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './Interface_Principale/dashboard.component';
import { ListEtudiantComponent } from './Etudiant/list-etudiant/list-etudiant.component';
import { AadEtudiantComponent } from './Etudiant/aad-etudiant/aad-etudiant.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';
import { AjouterBlocComponent } from './Bloc/ajouter-bloc/ajouter-bloc.component';
import { ChambreComponent } from './Chambre/chambre/chambre.component';
import { UniversiteComponent } from './Universite/universite/universite.component';
import { FoyerComponent } from './foyer/foyer/foyer.component';
import { UpdateUnivComponent } from './Universite/update-univ/update-univ.component';
import { AllblocsComponent } from './allblocs/allblocs.component';
import { EditblocComponent } from './editbloc/editbloc.component';
import { FoyerInfoComponent } from './foyer-info/foyer-info.component';
import { AffecterblocafoyerComponent } from './affecterblocafoyer/affecterblocafoyer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListEtudiantComponent,
    AadEtudiantComponent,
    UpdateEtudiantComponent,
    AjouterBlocComponent,
    ChambreComponent,
    UniversiteComponent,
    UpdateUnivComponent,
    AllblocsComponent,
    EditblocComponent,
    FoyerInfoComponent,
    AffecterblocafoyerComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
