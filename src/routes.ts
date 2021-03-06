import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventRouteActivator } from './app/events/event-details/event-route-activator.service';
import { EventsListComponent } from './app/events/events-list.component';
import { EventListResolver } from './app/events/shared/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateNewEvent']
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '404', component: Error404Component },

  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events', pathMatch: 'full' }
];
