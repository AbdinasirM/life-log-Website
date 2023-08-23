import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddJournalComponent } from './add-journal/add-journal.component';
import { JournalsComponent } from './journals/journals.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard
import { WellnessComponent } from './wellness/wellness.component'; 
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Landing Page
  { path: 'sign-up', component: SignUpComponent , canActivate: [AuthGuard]  }, // Sign Up with AuthGuard
  { path: 'about-us', component: AboutUsComponent }, // About Us
  { path: 'contact-us', component: ContactUsComponent }, // Contact Us
  { path: 'wellness', component: WellnessComponent, canActivate: [AuthGuard]  }, // Wellness Page with AuthGuard
  { path: 'sign-in', component: SignInComponent , canActivate: [AuthGuard]  }, // Sign In with AuthGuard
  { path: 'addjournal', component: AddJournalComponent, canActivate: [AuthGuard]  }, // Add Journal with AuthGuard
  { path: 'journals', component: JournalsComponent, canActivate: [AuthGuard] }, // Journals Page with AuthGuard
  { path: 'home', component: UserHomeComponent, canActivate: [AuthGuard] }, // User Home Page with AuthGuard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
