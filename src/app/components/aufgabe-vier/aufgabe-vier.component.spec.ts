import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeVierComponent } from './aufgabe-vier.component';

describe('AufgabeVierComponent', () => {
  let component: AufgabeVierComponent;
  let fixture: ComponentFixture<AufgabeVierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabeVierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeVierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
