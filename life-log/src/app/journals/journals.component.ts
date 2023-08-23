import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { JournalService } from '../journal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.scss']
})
export class JournalsComponent implements OnInit {
  user: any;
  journals: any[] = []; // Initialize journals as an empty array

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private journalService: JournalService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadUserProfile(); // Load user profile information
    await this.loadJournals(); // Load user's journal entries
  }

  // Format timestamp to a readable format
  formatTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  }

  // Load user profile data
  async loadUserProfile(): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        this.router.navigate(['sign-in']); // Redirect to sign-in page if token is not present
        return;
      }

      const headers = this.authService.getAuthHeaders(token);

      const response = await this.http
        .get<any>(`${this.authService.apiUrl}/users/me`, { headers })
        .toPromise();

      this.user = response.user; // Access user data from the "user" property
    } catch (error) {
      // console.error('Error fetching user profile', error);
      alert('Error fetching user profile ' + error);
    }
  }

  // Load user journals
  async loadJournals(): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        this.router.navigate(['sign-in']); // Redirect to sign-in page if token is not present
        return;
      }

      const headers = this.authService.getAuthHeaders(token);

      const response = await this.http
        .get<any[]>(`${this.authService.apiUrl}/notes`, { headers })
        .toPromise();

      this.journals = response || []; // Assign the response or an empty array
    } catch (error) {
      // console.error('Error fetching user journals', error);
      alert('Error fetching user journals' + error);
    }
  }

  // Add a journal entry
  async addJournal(journalEntry: any): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        this.router.navigate(['sign-in']); // Redirect to sign-in page if token is not present
        return;
      }

      const headers = this.authService.getAuthHeaders(token);

      const response = await this.journalService
        .addJournal(journalEntry)
        .toPromise();

      await this.loadUserProfile();
    } catch (error) {
      // console.error('Error adding journal entry', error);
      alert('Error adding journal entry' + error);
    }
  }

  // Delete a journal entry
  async deleteJournal(journalId: string): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        this.router.navigate(['sign-in']); // Redirect to sign-in page if token is not present
        return;
      }

      const headers = this.authService.getAuthHeaders(token);

      await this.journalService.deleteJournal(journalId).toPromise();

      // console.log('Deleted journal entry');
      // alert('Deleted journal entry');
      await this.loadUserProfile();
      location.reload(); // Reload the page
      this.router.navigate(['users/me']); // Redirect after successful deletion
    } catch (error) {
      // console.error('Error deleting journal entry', error);
      alert('Error deleting journal entry' + error);
      // Handle error here, e.g., show an error message to the user
    }
  }

  // Add other methods if needed

}
