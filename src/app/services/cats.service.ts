import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICat} from '../models/cat.model';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  #apiUrl: string = "https://api.thecatapi.com/v1/images/search";
  #token: string = environment.api_token;

  #limit: number = 25;

  constructor(private http: HttpClient) {
  }

  get(limit?: number): Observable<ICat[]> {
    let filter: string = "?";

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
