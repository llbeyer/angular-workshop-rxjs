import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, switchMap, tap} from "rxjs";
import {User} from "../../user.model";

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
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(users => users.find(user => user.name === 'Ervin Howell')),
        switchMap(user =>
          forkJoin({
            posts: this.http.get(`https://jsonplaceholder.typicode.com/users/${user?.id}/posts`),
            albums: this.http.get(`https://jsonplaceholder.typicode.com/users/${user?.id}/albums`),
          })
        ),
        tap(({posts, albums}) => console.log(posts, albums))
      )
      .subscribe();
  }

}
