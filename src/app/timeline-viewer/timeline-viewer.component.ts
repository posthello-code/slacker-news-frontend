import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SlackerNewsApiService } from '../slacker-news-api.service';
import { ListboxModule } from 'primeng/listbox';
import { CommonModule, NgFor, NgIf } from '@angular/common';

interface Stories {
  title?: string;
  summary?: string;
  sourceUri?: string;
  createdDate?: string;
}
@Component({
  selector: 'app-timeline-viewer',
  standalone: true,
  imports: [
    TimelineModule,
    CardModule,
    ScrollPanelModule,
    NgIf,
    ListboxModule,
    NgFor,
    CommonModule,
  ],
  templateUrl: './timeline-viewer.component.html',
  styleUrl: './timeline-viewer.component.scss',
})
export class TimelineViewerComponent {
  stories: Stories[];
  dataAvailable: Boolean;
  isSmallScreen: Boolean | undefined;
  constructor(private slackerNewsApi: SlackerNewsApiService) {
    this.stories = [];
    this.dataAvailable = false;
  }
  ngOnInit() {
    this.loadData();
    this.isSmallScreen = window.innerWidth < 768;
  }

  loadData() {
    this.slackerNewsApi
      .getStories()
      .then((data) => {
        this.dataAvailable = true;
        console.log('then');

        // Use the data here
        this.stories = data.data;
        console.log(data.status);
      })
      .catch((e) => {
        this.dataAvailable = false;
        console.log('catch');
        console.log(e);
      });
  }
}
