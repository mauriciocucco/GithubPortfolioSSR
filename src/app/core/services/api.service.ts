import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string, params = {}): Observable<T> {
    return this.httpClient.get<T>(environment.apiUrl + endpoint, {
      params
    });
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.httpClient.post<T>(environment.apiUrl + endpoint, data);
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.httpClient.put<T>(environment.apiUrl + endpoint, data);
  }

  patch<T>(endpoint: string, data: any): Observable<T> {
    return this.httpClient.patch<T>(environment.apiUrl + endpoint, data);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.httpClient.delete<T>(environment.apiUrl + endpoint);
  }
}
