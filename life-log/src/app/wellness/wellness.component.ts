import { Component, OnInit } from '@angular/core';
import { WellnessService } from '../wellness.service';

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.scss']
})
export class WellnessComponent implements OnInit {
 

  formatTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  }

// At the top of your WellnessComponent class
public wellnessEntries: any[] = [];
wellnessEntry = {
  breakfast: '',
  lunch: '',
  dinner: '',
  waterconsumption: null,
  exerciseHours: null,
  sleepHours: null,
  snackNames: '',
  snackCount: null,
  stepsTaken: null,
  createdAt: null,
};
  constructor(private wellnessService: WellnessService) {}

 // Inside your WellnessComponent class, after importing and injecting WellnessService
ngOnInit(): void {
  this.wellnessService.getWellnesses().subscribe(entries => {
    this.wellnessEntries = entries;
  });
}

  onSubmit() {
    this.wellnessService.addWellness(this.wellnessEntry).subscribe(
      response => {
        // console.log('Wellness entry added:', response);
        // Clear form after successful submission
        this.wellnessEntry = {
          breakfast: '',
          lunch: '',
          dinner: '',
          waterconsumption: null,
          exerciseHours: null,
          sleepHours: null,
          snackNames: '',
          snackCount: null,
          stepsTaken: null,
          createdAt: null,
        };
        this.refresh();
        location.reload();
      },
      error => {
        console.error('Error adding wellness entry:', error);
      }
    );
  }
  
  // refresh() {
  //   // Fetch wellness entries from the service
  //   this.wellnessService.getWellnesses().subscribe(
  //     entries => {
  //       console.log('Fetched wellness entries:', entries);
  //       // Reload the page to reflect the updated data
  //       location.reload();
  //     },
  //     error => {
  //       console.error('Error fetching wellness entries:', error);
  //     }
  //   );
  // }
  refresh() {
    // Fetch wellness entries from the service
    this.wellnessService.getWellnesses().subscribe(
      entries => {
        console.log('Fetched wellness entries:', entries);
        // Update wellnessEntries with the fetched data
        this.wellnessEntries = entries;
        location.reload();
      },
      error => {
        console.error('Error fetching wellness entries:', error);
      }
    );
  }


  delete(entryId: string) {
    // Call the deleteWellness method from the service
    this.wellnessService.deleteWellness(entryId).subscribe(
      () => {
        console.log('Wellness entry deleted');
        // Remove the deleted entry from wellnessEntries
        this.wellnessEntries = this.wellnessEntries.filter(entry => entry._id !== entryId);
        location.reload();

      },
      error => {
        console.error('Error deleting wellness entry:', error);
      }
    );
  }
  
}
