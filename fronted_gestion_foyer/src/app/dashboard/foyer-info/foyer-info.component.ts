import { Component, Input, SimpleChanges } from '@angular/core';
import { Foyer } from 'src/app/core/Models/Foyer/foyer';
import { FoyerService } from 'src/app/core/service/Foyer/foyer.service';

@Component({
  selector: 'app-foyer-info',
  templateUrl: './foyer-info.component.html',
  styleUrls: ['./foyer-info.component.css']
})
export class FoyerInfoComponent {
  @Input() foyerId : number=0 ;
  foyer!: Foyer; 

  constructor(private foyerService: FoyerService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['foyerId'] && !changes['foyerId'].firstChange) {
      this.retrieveFoyerDetails(this.foyerId);
    }
  }
  retrieveFoyerDetails(id: number) {
    this.foyerService.retrieveFoyer(id).subscribe(
      (data) => {
        this.foyer = data;
        console.log(this.foyer);
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
