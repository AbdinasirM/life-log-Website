import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private journalsUrl = 'http://localhost:3000/notes'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getJournals(): Observable<any[]> {
    return this.http.get<any[]>(this.journalsUrl);
  }

  // addJournal(note: any): Observable<any> {
  //   return this.http.post<any>(`${this.journalsUrl}/add`, note);
  // }

  addJournal(journalEntry: any): Observable<any> {
    return this.http.post(`${this.journalsUrl}/add`, journalEntry);
  }

  deleteJournal(id: string): Observable<any> {
    return this.http.delete<any>(`${this.journalsUrl}/delete/${id}`);
  }

}
