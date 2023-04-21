import {Component, ElementRef, OnInit} from '@angular/core';
import {delay, fromEvent, pipe, scan, tap} from "rxjs";

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
    fromEvent(this.elRef.nativeElement, 'click')
      .pipe(
        scan((accumulator, current) => accumulator + 1, 0),
        delay(350),
        tap(clicks => console.log(clicks)),
      )
      .subscribe()
  }

}
