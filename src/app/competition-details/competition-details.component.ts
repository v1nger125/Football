import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequesterService } from '../requester.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit {

  matches = []

  date1 = new FormControl('1900')
  date2 = new FormControl('2050')

  constructor(private route: ActivatedRoute,
    private requester: RequesterService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');
    this.requester.requestToAPI('http://api.football-data.org/v2/competitions/'+id+'/matches', '').subscribe(data => {this.matches = data['matches']})
  }

}
