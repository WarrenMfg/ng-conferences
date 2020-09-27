import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

import { EventService } from './events/shared/event.service';

@NgModule({
  imports: [BrowserModule],
  providers: [EventService],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule {}
