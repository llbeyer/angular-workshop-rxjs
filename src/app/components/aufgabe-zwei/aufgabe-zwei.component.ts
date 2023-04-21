import {Component, OnInit} from '@angular/core';
import {filter, interval, map, tap} from "rxjs";

@Component({
  selector: 'app-aufgabe-zwei',
  templateUrl: './aufgabe-zwei.component.html',
  styleUrls: ['./aufgabe-zwei.component.scss']
})
export class AufgabeZweiComponent implements OnInit {

  ngOnInit() {
    interval(1000)
      .pipe(
        filter(value => value % 2 === 0),
        map(value => value * 5),
        tap(value => console.log(value))
      )
      .subscribe();
  }

}
