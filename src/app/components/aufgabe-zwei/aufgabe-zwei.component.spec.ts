import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeZweiComponent } from './aufgabe-zwei.component';

describe('AufgabeZweiComponent', () => {
  let component: AufgabeZweiComponent;
  let fixture: ComponentFixture<AufgabeZweiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabeZweiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeZweiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
