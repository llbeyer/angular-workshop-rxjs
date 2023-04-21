import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-aufgabe-eins',
  templateUrl: './aufgabe-eins.component.html',
  styleUrls: ['./aufgabe-eins.component.scss']
})
export class AufgabeEinsComponent implements OnInit {

  constructor(
    private readonly elRef: ElementRef
  ) {
  }

  ngOnInit() {
  }

}
