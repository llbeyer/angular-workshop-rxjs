import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeEinsComponent } from './aufgabe-eins.component';

describe('AufgabeEinsComponent', () => {
  let component: AufgabeEinsComponent;
  let fixture: ComponentFixture<AufgabeEinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabeEinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeEinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
