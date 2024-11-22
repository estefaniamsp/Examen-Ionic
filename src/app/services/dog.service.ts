import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private booksUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
  private dogsUrl = 'https://dog.ceo/api/breeds/image/random';
  private robotsUrl = 'https://robohash.org/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>(this.booksUrl);
  }

  getDogImage(): Observable<{ message: string; status: string }> {
    return this.http.get<{ message: string; status: string }>(this.dogsUrl);
  }

  getRobotImage(id: number): string {
    return `${this.robotsUrl}${id}`;
  }
}
