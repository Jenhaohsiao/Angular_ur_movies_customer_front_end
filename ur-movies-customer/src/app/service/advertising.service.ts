import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import { catchError } from 'rxjs/operators';
import { Advertising } from '../advertising/advertising.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  private apiRoute = `${environment.baseUrl}/api/advertisings`;

  constructor(
    private http: HttpClient
  ) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }

  getAdvertisings(): Observable<Advertising[]> {
    return this.http.get<Advertising[]>(this.apiRoute)
      .pipe(catchError(this.errorHandler));
  }

  getAdvertising(id: string): Observable<Advertising> {
    return this.http.get<Advertising>(`${this.apiRoute}/${id}`)
      .pipe(catchError(this.errorHandler));
  }

}
