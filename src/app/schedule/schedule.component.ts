import { Component, OnInit } from '@angular/core';
import { Move } from '../shared/move.model'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  constructor(moves: Array<Move>) { }

  ngOnInit() {
  }

}
