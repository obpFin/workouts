import { Injectable, ElementRef } from '@angular/core';

import { utils } from './shared/utils'

@Injectable()
export class SchedulesService {
  selectedSchedule: number
  schedules: {id: number, name: string}[] = [
    {
      id: 1,
      name: 'sch 1',
    }, 
    {
      id: 2,
      name: 'sch 2'
    }
  ]

  addSchedule(nameRef: ElementRef) {
    const id = this.getId()
    const name = nameRef.nativeElement.value
    const schedule = {name, id}
    this.schedules.push(schedule)
  }

  selectSchedule(id: number) {
    this.selectedSchedule = id
  }

  getId() {
    let id = utils.randomNumber(1, 99)
    if (this.schedules.some(s => s.id === id)) {
      return this.getId()
    }
    return id
  }


}