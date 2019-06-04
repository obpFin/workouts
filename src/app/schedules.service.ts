import { Injectable } from '@angular/core';

@Injectable()
export class SchedulesService {
  schedules = [
    {
      name: 'sch 1',
    }, 
    {
      name: 'sch 2'
    }
  ]

  addSchedule(name: string) {
    this.schedules.push({name: name})
  }
}