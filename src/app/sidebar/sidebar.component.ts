import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit, OnChanges {
  @ViewChild('scheduleName') scheduleName: ElementRef;
  scheduleLinks: {id: number, name: string}[] = []

  constructor(private schedulesService: SchedulesService) {}


  ngOnInit() {
    console.log('Init',this.schedulesService.schedules)
    this.scheduleLinks = this.schedulesService.schedules
  }

  ngOnChanges() {
    console.log('Change',this.schedulesService.schedules)
  }

  onAddSchedule() {
    if (this.scheduleName) {
      console.log('asd', this.scheduleName)
      this.schedulesService.addSchedule(this.scheduleName)
    }
  }
}
