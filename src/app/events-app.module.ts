import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../routes';

import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

import { EventService } from './events/shared/event.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [
    EventService,
    EventRouteActivator,
    { provide: 'canDeactivateNewEvent', useValue: checkDirtyState }
  ],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return confirm(
      'You have not saved this event. Do you really want to cancel?'
    );
  }
  return true;
}
