// import { Component } from '@angular/core';
// import { JournalService } from '../journal.service';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-add-journal',
//   templateUrl: './add-journal.component.html',
//   styleUrls: ['./add-journal.component.scss']
// })
// export class AddJournalComponent{
//   journalForm: FormGroup;
//   selectedImage: string | undefined;

//   constructor(
//     private journalService: JournalService,
//     private router: Router,
//     private fb: FormBuilder
//   ) {
//     this.journalForm = this.fb.group({
//       title: ['', Validators.required],
//       text: ['', Validators.required],
//       about: ['', Validators.required]
//     });
//   }

//   addJournal(): void {
//     if (this.journalForm.invalid) {
//       return; // If the form is invalid, do nothing
//     }

//     this.journalService.addJournal(this.journalForm.value).subscribe(
//       () => {
//         this.router.navigate(['users/me']); // Redirect after successful addition
//       },
//       (error) => {
//         console.error('Error adding journal:', error);
//         // Handle error here, e.g., show an error message to the user
//       }
//     );
//   }


// }
import { Component } from '@angular/core';
import { JournalService } from '../journal.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-journal',
  templateUrl: './add-journal.component.html',
  styleUrls: ['./add-journal.component.scss']
})
export class AddJournalComponent {
  journalForm: FormGroup;
  selectedImage: string | undefined;
  errorMessage: string | undefined;

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

    this.journalService
      .addJournal(this.journalForm.value)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'An error occurred while adding the journal.';
          console.error('Error adding journal:', error);
          return of(null); // Return an observable to continue the flow
        })
      )
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['users/me']); // Redirect after successful addition
        }
      });
  }
}
