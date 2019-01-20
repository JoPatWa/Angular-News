import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiURL;
const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(`${apiUrl}/${url}`, { params }).pipe(
      tap(value => {
        console.log(value);
      })
    )
  }
}
