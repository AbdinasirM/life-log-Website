// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { SignInComponent } from './sign-in/sign-in.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
// import { JournalComponent } from './journal/journal.component';
// import { AddJournalComponent } from './add-journal/add-journal.component';
// import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './auth.guard';

// const routes: Routes = [
// 	{ path: '', component: LandingPageComponent },
// 	{ path: 'sign-in', component: SignInComponent },
// 	{ path: 'sign-up', component: SignUpComponent },
// 	{ path: 'about-us', component: AboutUsComponent },
// 	{ path: 'contact-us', component: ContactUsComponent },
// 	{ path: 'journal', component: JournalComponent },
// 	{ path: 'addjournal', component:  AddJournalComponent},
// 	{ path: 'users/me', component: HomeComponent },

// ];

// @NgModule({
// 	imports: [RouterModule.forRoot(routes)],
// 	exports: [RouterModule],
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JournalComponent } from './journal/journal.component';
import { AddJournalComponent } from './add-journal/add-journal.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sign-up', component: SignUpComponent , canActivate: [AuthGuard]  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'sign-in', component: SignInComponent , canActivate: [AuthGuard]  },
  { path: 'addjournal', component: AddJournalComponent, canActivate: [AuthGuard]  },
  { path: 'users/me', component: HomeComponent, canActivate: [AuthGuard] }, // Add AuthGuard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
