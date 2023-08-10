import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { SignInAndSignUpComponent } from './landing-page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FeedbackComponent } from './landing-page/feedback/feedback.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInAndSignUpComponent,
    SignInComponent,
    FeedbackComponent,
    FooterComponent,
    LandingPageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
