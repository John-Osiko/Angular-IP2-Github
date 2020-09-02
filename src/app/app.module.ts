import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SearchmygitService } from './github-httpclient-service/searchmygit.service';
import { ProfileRequestServiceService } from './profile-request-service.service';
import { RepoRequest } from './repo-request';
import { User } from './user';
import { AlertService } from './alert-service/alert.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'landing', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchmygitService, ProfileRequestServiceService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
