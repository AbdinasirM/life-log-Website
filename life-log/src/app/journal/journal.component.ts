import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent  implements OnInit {
  @Input() journals: any[] = [];
  @Output() journalDeleted = new EventEmitter<number>();


constructor(
  private journalService: JournalService,
  private router: Router,

){}
  ngOnInit() {
    this.fetchJournals();
  }

  formatTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  }

  fetchJournals() {
    this.journalService.getJournals().subscribe(
      (journals) => {
        this.journals = journals;
      },
      (error) => {
        console.error(error);
      }
    );
  }
 

  deleteJournal(index: number) {
    const journalId = this.journals[index]._id; // Replace with the actual property name for journal ID
    this.journalService.deleteJournal(journalId).subscribe(
      () => {
        this.journals.splice(index, 1); // Remove the journal from the local array
        //this.router.navigate(['/']); // Redirect after successful addition
      },
      (error) => {
        console.error(error);
      }
    );
  }


}

