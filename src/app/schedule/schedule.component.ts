import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../shared/move.model'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {
  moves: Array<Move> 
  @Input('scheduleElement') schedule: {name: string};
  
  constructor() { }

  ngOnInit() {
  }

}
