import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

declare let $: any;

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleToast() {
    const toast = $('.toast');
    toast.find('#toast-body').text('More to come...');
    toast.toast('show');
  }
}
