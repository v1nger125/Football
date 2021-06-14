import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../requester.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams = []

  name = new FormControl('')

  constructor(private requester: RequesterService) { }

  ngOnInit() {
    this.requester.requestToAPI('http://api.football-data.org/v2/teams', '').subscribe(data => {this.teams = data['teams']})
  }

}
