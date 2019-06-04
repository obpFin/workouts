import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  schedules: {name: string}[] = []

  constructor(private schedulesService: SchedulesService) {}

  ngOnInit() {
    console.log(this.schedulesService.schedules)
    this.schedules = this.schedulesService.schedules
  }

}
