import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route);
    this.events = this.route.snapshot.data.events;
  }

  handleToast() {
    const toast = $('.toast');
    toast.find('#toast-body').text('More to come...');
    toast.toast('show');
  }
}
