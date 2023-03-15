import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  interval$!: Observable<string>;

  ngOnInit(): void {
    this.interval$ = interval(1000)
    .pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        `${value} je suis ton pair` :
        `${value} il pleut prend ton impair`
      ),
      tap(text => this.logger(text)) // pour Créez des effets secondaires
    );

  }

  logger(text: string) {
    console.log(`log : ${ text }`);
  }

}
