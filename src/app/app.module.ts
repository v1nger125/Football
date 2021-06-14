import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompetitionComponent } from './competition/competition.component';
import { TeamsComponent } from './teams/teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamDetailsComponent } from './competition-details/team-details.component';
import { CompetitionDetailsComponent } from './competition-details/competition-details.component';
import { CompetitionTeamsComponent } from './teams/competition-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CompetitionComponent,
    TeamsComponent,
    TeamDetailsComponent,
    CompetitionDetailsComponent,
    CompetitionTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
