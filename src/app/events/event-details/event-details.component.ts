import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: 'event-details.component.html',
  styles: [
    `
      .event-image {
        height: 100px;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const event = this.eventService.getEvent(+this.route.snapshot.params.id);
    if (event) this.event = event;
    else this.router.navigate(['/events']);
  }
}
