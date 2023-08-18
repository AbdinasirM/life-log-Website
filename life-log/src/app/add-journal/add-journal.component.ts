import { Component } from '@angular/core';
import { JournalService } from '../journal/journal.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-journal',
  templateUrl: './add-journal.component.html',
  styleUrls: ['./add-journal.component.scss']
})
export class AddJournalComponent{
  journalForm: FormGroup;
  selectedImage: string | undefined;

  constructor(
    private journalService: JournalService,
    private router: Router,
    private fb: FormBuilder
  ) {
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

    this.journalService.addJournal(this.journalForm.value).subscribe(
      () => {
        this.router.navigate(['journal']); // Redirect after successful addition
      },
      (error) => {
        console.error('Error adding journal:', error);
        // Handle error here, e.g., show an error message to the user
      }
    );
  }


}
