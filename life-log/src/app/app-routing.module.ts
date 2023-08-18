import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JournalComponent } from './journal/journal.component';
import { AddJournalComponent } from './add-journal/add-journal.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'sign-in', component: SignInComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'about-us', component: AboutUsComponent },
	{ path: 'contact-us', component: ContactUsComponent },
	{ path: 'journal', component: JournalComponent },
	{ path: 'addjournal', component:  AddJournalComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
