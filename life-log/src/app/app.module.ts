import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component'
import { SignInAndSignUpComponent } from './landing-page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FeedbackComponent } from './landing-page/feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JournalsComponent } from './journals/journals.component';
import { JournalComponent } from './journal/journal.component';
import { HealthComponent } from './health/health.component';
import { AddJournalComponent } from './add-journal/add-journal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WellnessComponent } from './wellness/wellness.component';
import { UserHomeComponent } from './user-home/user-home.component'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInAndSignUpComponent,
    SignInComponent,
    FeedbackComponent,
    FooterComponent,
    LandingPageComponent,
    SignUpComponent,
    AboutUsComponent,
    ContactUsComponent,
    JournalsComponent,
    JournalComponent,
    HealthComponent,
    AddJournalComponent,
    WellnessComponent,
    UserHomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
