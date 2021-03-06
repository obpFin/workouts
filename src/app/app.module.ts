import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulesService } from './schedules.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SchedulesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
