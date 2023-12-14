import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'src/app/core/service/bloc/bloc.service';

@Component({
  selector: 'app-editbloc',
  templateUrl: './editbloc.component.html',
  styleUrls: ['./editbloc.component.css']
})
export class EditblocComponent {
  blocForm!: FormGroup;
    blocId: number = 0;
    showSuccessAlert: boolean = false;
  
    constructor(
      private fb: FormBuilder,
      private blocService: BlocService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
    ngOnInit(): void {
      this.blocForm = this.fb.group({
        idBloc: [''], 
        nomBloc: ['', Validators.required],
        capaciteBloc: ['', Validators.required],
      
      });
  
      this.loadBlocData();
    }
  
    loadBlocData() {
        const idFromRoute = this.route.snapshot.paramMap.get('id');
        this.blocId = +idFromRoute!;
      if (this.blocId !== null) {
        this.blocService.getBloc(this.blocId).subscribe(
          (bloc) => {
            this.blocForm.patchValue({
              idBloc: bloc.idBloc,
              nomBloc: bloc.nomBloc,
              capaciteBloc: bloc.capaciteBloc,
            });
          },
          (error) => {
            console.error('Erreur lors du chargement des données du bloc :', error);
          }
        );
      }
    }
  
    updateBloc() {
      if (this.blocId !== null && this.blocForm.valid) {
        const updatedBloc = this.blocForm.value;
        this.blocService.updateBloc(this.blocId, updatedBloc).subscribe(
          (result) => {
            console.log('Bloc mis à jour avec succès :', result);
  
           
            this.showSuccessAlert = true;
  
            setTimeout(() => {
              this.router.navigate(['dashboard/allblocs']);
            }, 1000);
          },
          (error) => {
            console.error('Erreur lors de la mise à jour du bloc :', error);
          
          }
        );
      }
    }

}
