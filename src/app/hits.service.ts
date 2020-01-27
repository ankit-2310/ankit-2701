import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const end_point = 'https://hn.algolia.com/api/v1/';
@Injectable({
  providedIn: 'root'
})

export class HitsService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(end_point+'search_by_date?tags=story')
  }
}
