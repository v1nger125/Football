import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../requester.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competitions = []

  name = new FormControl('')

  constructor(private requester: RequesterService) { }

  ngOnInit() {
    this.requester.requestToAPI('http://api.football-data.org/v2/competitions', '').subscribe(data => {this.competitions = data['competitions']})
  }

}
