import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeDreiComponent } from './aufgabe-drei.component';

describe('AufgabeDreiComponent', () => {
  let component: AufgabeDreiComponent;
  let fixture: ComponentFixture<AufgabeDreiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabeDreiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeDreiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
