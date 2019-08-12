import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor(
    private http: HttpClient
  ) { }
  public getPostsByBlogger(): Observable<any> {
    const URL = 'assets/mock.json';
    return this.http
        .get(URL).pipe(
          map((response: Response) => response
          )
        );
  }
}
