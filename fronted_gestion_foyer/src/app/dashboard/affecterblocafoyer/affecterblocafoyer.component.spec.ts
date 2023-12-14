import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterblocafoyerComponent } from './affecterblocafoyer.component';

describe('AffecterblocafoyerComponent', () => {
  let component: AffecterblocafoyerComponent;
  let fixture: ComponentFixture<AffecterblocafoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterblocafoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterblocafoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
