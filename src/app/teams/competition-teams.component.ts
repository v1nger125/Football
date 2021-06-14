import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequesterService } from '../requester.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-competition-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class CompetitionTeamsComponent implements OnInit {

  teams = []

  name = new FormControl('')

  constructor(private route: ActivatedRoute,
    private requester: RequesterService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');

    this.requester.requestToAPI('http://api.football-data.org/v2/competitions/'+id+'/teams', '').subscribe(data => {this.teams = data['teams']})
  }

}
