import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-aufgabe-vier',
  templateUrl: './aufgabe-vier.component.html',
  styleUrls: ['./aufgabe-vier.component.scss']
})
export class AufgabeVierComponent implements OnInit {

  formControl: FormControl;

  private readonly values: string[] = [
    'The enlightened surrender of ascension is to shape with advice.',
    'If you do or grow with a united solitude, fear illuminates you.',
    'Be remarkable for whoever travels, because each has been hurted with density.',
    'You have to travel, and fear futility by your rising.',
    'Not earth or space, praise the earth.',
    'Be eternal.'
  ];

  constructor(
  ) {
    this.formControl = new FormControl<string>('');
  }

  ngOnInit() {
  }

}
