import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WellnessService {
  public wellnessUrl = 'http://localhost:3000/wellness';

  constructor(private http: HttpClient) {}


getWellnesses(): Observable<any[]> {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.get<any[]>(this.wellnessUrl, { headers });
}

addWellness(wellnessEntry: any): Observable<any> {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.post(`${this.wellnessUrl}/add`, wellnessEntry, { headers });

}


deleteWellness(id: string): Observable<any> {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  };
  return this.http.delete<any>(`${this.wellnessUrl}/delete/${id}`, { headers });
}



}
