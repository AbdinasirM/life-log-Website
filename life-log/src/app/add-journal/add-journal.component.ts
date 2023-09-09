import { Component } from '@angular/core';
import { JournalService } from '../journal.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-journal', // Component selector
  templateUrl: './add-journal.component.html', // HTML template file path
  styleUrls: ['./add-journal.component.scss'] // Stylesheet file path
})
export class AddJournalComponent {
  journalForm: FormGroup; // Form group for journal input fields
  selectedImage: string | undefined; // Holds the selected image data
  errorMessage: string | undefined; // Holds error message for form submission

  constructor(
    private journalService: JournalService, // Injecting JournalService
    private router: Router, // Router for navigation
    private fb: FormBuilder // FormBuilder for form handling
  ) {
    // Initializing the journal form with required validators
    this.journalForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      about: ['', Validators.required]
    });
  }

  addJournal(): void {
    if (this.journalForm.invalid) {
      return; // If the form is invalid, do nothing
    }

    // Adding journal using the journalService and handling errors
    this.journalService
      .addJournal(this.journalForm.value)
      .pipe(
        catchError((error) => {
          // Handling errors and displaying an error message
          this.errorMessage = 'An error occurred while adding the journal.';
          // console.error('Error adding journal:', error);
          alert('An error occurred while adding the journal ' + error.message);
          return of(null); // Return an observable to continue the flow
        })
      )
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['journals']); // Redirect after successful addition
        }
      });
  }
}
