import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SlackerNewsApiService } from '../slacker-news-api.service';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}
@Component({
  selector: 'app-timeline-viewer',
  standalone: true,
  imports: [TimelineModule, CardModule, ScrollPanelModule],
  templateUrl: './timeline-viewer.component.html',
  styleUrl: './timeline-viewer.component.scss',
})
export class TimelineViewerComponent {
  events: any[];

  constructor(private slackerNewsApi: SlackerNewsApiService) {
    slackerNewsApi.getStories();
    this.events = [
      {
        title: 'Unable to load stories, please try again later.',
      },
    ];
  }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.slackerNewsApi
      .getStories()
      .then((data) => {
        console.log('then');

        // Use the data here
        this.events = data.data;
        console.log(data.status);
      })
      .catch((e) => {
        console.log('catch');
        console.log(e);
      });
  }
}
