import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditblocComponent } from './editbloc.component';

describe('EditblocComponent', () => {
  let component: EditblocComponent;
  let fixture: ComponentFixture<EditblocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditblocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditblocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
