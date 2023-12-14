import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlocService } from 'src/app/core/service/bloc/bloc.service';

@Component({
  selector: 'app-affecterblocafoyer',
  templateUrl: './affecterblocafoyer.component.html',
  styleUrls: ['./affecterblocafoyer.component.css']
})
export class AffecterblocafoyerComponent {
  affecterForm!: FormGroup;
  showSuccessAlert: boolean = false;

  constructor(
    private fb: FormBuilder,
    private blocService: BlocService ,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.affecterForm = this.fb.group({
      idBloc: ['', Validators.required],
      idFoyer: ['', Validators.required],
    });
  }

  affecterBlocAFoyer() {
    if (this.affecterForm.valid) {
      const { idBloc, idFoyer } = this.affecterForm.value;
      this.blocService.affecterBlocAFoyer(idBloc, idFoyer).subscribe(
        () => {
          console.log('Bloc affecté au foyer avec succès');
          this.showSuccessAlert = true;
          setTimeout(() => {
            this.router.navigate(['dashboard/allblocs']);
          }, 1000);
        },
        error => {
          console.error('Erreur lors de l\'affectation du bloc au foyer', error);
        }
      );
    }
  }
}


