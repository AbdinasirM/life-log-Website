// Import necessary modules and components from Angular
import { Component, OnInit } from '@angular/core';
import { WellnessService } from '../wellness.service'; // Import your custom WellnessService

@Component({
  selector: 'app-wellness', // This component can be used with the <app-wellness></app-wellness> tag
  templateUrl: './wellness.component.html', //Template file for rendering UI
  styleUrls: ['./wellness.component.scss'], // Styling specific to this component
})
export class WellnessComponent implements OnInit {

   // Initialize an array to hold wellness entries
   public wellnessEntries: any[] = [];

  formatTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  }



  // Structure to hold a new wellness entry
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


  constructor(private wellnessService: WellnessService) {
    // Inject WellnessService into the component

  }

  ngOnInit(): void {
    // When the component initializes, fetch wellness entries and store them
    this.wellnessService.getWellnesses().subscribe(entries => {
      this.wellnessEntries = entries; // Store fetched wellness entries in wellnessEntries array
    });
  }

  onSubmit() {
    this.wellnessService.addWellness(this.wellnessEntry).subscribe(
      response => {
        // After submitting a wellness entry, clear the form and refresh the page
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
        this.refresh(); // Update the wellness entries and reload the page
        location.reload(); // Reload the page to reflect changes
      },
      error => {
        // console.error('Error adding wellness entry:', error); // Log an error if adding entry fails
        alert('Error adding wellness entry: ' + error.message); // Log an error if adding entry fails
      }
    );
  }


  refresh() {
    // Fetch wellness entries from the service
    this.wellnessService.getWellnesses().subscribe(
      entries => {
        // console.log('Fetched wellness entries:', entries);
        this.wellnessEntries = entries; // Update wellnessEntries with the fetched data
        location.reload(); // Reload the page to reflect changes
      },
      error => {
        // console.error('Error fetching wellness entries:', error); // Log an error if fetching entries fails
        alert('Error fetching entries: ' + error.message); // Log an error if fetching
      }
    );
  }

  delete(entryId: string) {
    // Call the deleteWellness method from the service
    this.wellnessService.deleteWellness(entryId).subscribe(
      () => {
        // console.log('Wellness entry deleted');
        alert('Wellness entry deleted');
        // Remove the deleted entry from wellnessEntries
        this.wellnessEntries = this.wellnessEntries.filter(entry => entry._id !== entryId);
        location.reload(); // Reload the page to reflect changes
      },
      error => {
        // console.error('Error deleting wellness entry:', error); // Log an error if deleting entry fails
        alert('Error deleting wellness entry ' + error.message);
      }
    );
  }
}
