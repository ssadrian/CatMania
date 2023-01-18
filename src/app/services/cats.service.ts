import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICat} from '../models/cat.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  #apiUrl: string = "https://api.thecatapi.com/v1/images/search";
  #token: string = "live_KtbNg4qmbBZQkPKv06Op1OX2j2fEJFWAh3B6qvvywg9LoBmvHIPDJnJ1JFcysdSM";

  #limit: number = 25;

  constructor(private http: HttpClient) {
  }

  get(limit?: number): Observable<ICat[]> {
    let filter = "?";

    limit = Math.min(this.#limit, limit ?? 0);

    filter += `limit=${limit}`;

    return this.http
      .get<ICat[]>(this.#apiUrl + filter, {
        headers: {
          "x-api-key": this.#token
        }
      });
  }
}
