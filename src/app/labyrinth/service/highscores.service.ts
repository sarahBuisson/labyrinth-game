import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HighscoresService  {

  constructor(private http: HttpClient) {
  }


  public saveScore(player, score) {
    let objectObservable = this.http.post("http://sarahbuisson-server-sample.herokuapp.com/score", {
      player: player,
      score
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).pipe(take(1))
      .subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      );
    return objectObservable
  }

  public getScores() {
    return this.http.get("http://sarahbuisson-server-sample.herokuapp.com/scores");
  }

}
