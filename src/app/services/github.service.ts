import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Data } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { repos } from '../models/repos';
@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private readonly API ='https://localhost:44367/WeatherForecast';
    constructor(private http: HttpClient){}
    list(){
      return this.http.get<repos[]>(this.API)
      .pipe(tap(console.log))
    }
}

