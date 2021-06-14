import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionDetailsComponent } from './competition-details/competition-details.component';
import { CompetitionTeamsComponent } from './teams/competition-teams.component';
import { CompetitionComponent } from './competition/competition.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailsComponent } from './competition-details/team-details.component';


const routes: Routes = [
  {path: '', component: CompetitionComponent},
  {path: 'competitions', component: CompetitionComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'competitions/:id/teams', component: CompetitionTeamsComponent},
  {path: 'competitions/:id/matches', component: CompetitionDetailsComponent},
  {path: 'teams/:id/matches', component: TeamDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
