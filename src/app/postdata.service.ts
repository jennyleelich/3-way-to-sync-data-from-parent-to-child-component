import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostdataService {
  public messageSubject = new Subject();
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
   postMsg(message: any) {
     this.messageSubject.next(message);
   }
}
