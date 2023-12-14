import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/core/Models/Bloc/bloc';
import { BlocService } from 'src/app/core/service/bloc/bloc.service';

@Component({
  selector: 'app-allblocs',
  templateUrl: './allblocs.component.html',
  styleUrls: ['./allblocs.component.css']
})
export class AllblocsComponent  implements OnInit{
  blocs!: Bloc[];
  HoveredFoyer!: number  ;
  constructor(private blocservice:BlocService,private router:Router,private cdr:ChangeDetectorRef){


  }
  ngOnInit() {
    this.getAllBlocs();
 
  }
  getAllBlocs() {
    this.blocservice.getAllBlocs().subscribe(
      data => {
        this.blocs = data;
        console.log(this.blocs);
      },
      error => {
        console.error(error);
      }
    );
  }
  
  deleteBloc(id: number) {
    this.blocservice.deleteBloc(id).subscribe(
      () => {
     
        this.getAllBlocs();
      },
      error => {
        console.error(error);
      }
    );
  }

  editBloc(id: number) {
    console.log('Édition du bloc avec ID :', id);
  }
  navigateToAddBloc() {
    this.router.navigate(['/add-bloc']);
  }
  setHoveredFoyer(id: number | undefined) {
    console.log('Hovered Foyer ID:', id);
    this.HoveredFoyer = id || 0; // Use 0 as a default value or handle it according to your logic
    this.cdr.detectChanges();

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
}
}
