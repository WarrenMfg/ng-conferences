import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

declare let $: any;

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleShowEventName(eventName: string) {
    const toast = $('.toast');
    toast.find('#toast-body').text(eventName);
    toast.toast('show');
  }
}
