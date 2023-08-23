import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private journalsUrl = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {}

  // Fetch journal entries
  getJournals(): Observable<any[]> {
    return this.http.get<any[]>(this.journalsUrl);
  }

  // Add a new journal entry
  addJournal(journalEntry: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.post(`${this.journalsUrl}/add`, journalEntry, { headers });
  }

  // Delete a journal entry
  deleteJournal(id: string): Observable<any> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.delete<any>(`${this.journalsUrl}/delete/${id}`, {
      headers,
    });
  }
}
