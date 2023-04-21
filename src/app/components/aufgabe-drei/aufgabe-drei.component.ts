import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-aufgabe-drei',
  templateUrl: './aufgabe-drei.component.html',
  styleUrls: ['./aufgabe-drei.component.scss']
})
export class AufgabeDreiComponent implements OnInit {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  ngOnInit() {
  }

}
