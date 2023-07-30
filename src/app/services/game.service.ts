import { Injectable } from '@angular/core';
import {Game} from "../models/Game";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SimpleMessage} from "../models/SimpleMessage";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:8080/games/popular')
  }

  delete(id: number | undefined):Observable<SimpleMessage> {
    return this.http.delete<SimpleMessage>('http://localhost:8080/games/' + id)
  }

  buy(id: number | undefined):Observable<SimpleMessage> {
    return this.http.post<SimpleMessage>('http://localhost:8080/games/buy/' + id, {});
  }
}
