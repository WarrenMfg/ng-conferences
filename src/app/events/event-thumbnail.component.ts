import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() eventThumbnail: any;

  getTimeClass() {
    const isEarlyStart = this.eventThumbnail.time === '8:00 am';
    return {
      green: isEarlyStart,
      bold: isEarlyStart
    };
  }
}
