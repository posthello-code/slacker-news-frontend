import { Component } from "@angular/core";
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ProgressSpinnerModule } from "primeng/progressspinner";

import { SlackerNewsApiService } from "../slacker-news-api.service";
import { ListboxModule } from "primeng/listbox";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import { forkJoin } from "rxjs";
import { Story } from "../models/stories";
import { Comment } from "../models/comments";

@Component({
  selector: "app-timeline-viewer",
  standalone: true,
  imports: [
    TimelineModule,
    CardModule,
    ScrollPanelModule,
    NgIf,
    ListboxModule,
    NgFor,
    CommonModule,
    ProgressSpinnerModule,
  ],
  templateUrl: "./timeline-viewer.component.html",
  styleUrl: "./timeline-viewer.component.scss",
})
export class TimelineViewerComponent {
  stories: Story[];
  dataAvailable: boolean;
  commentsAvailable: boolean;
  comments: Comment[];
  isSmallScreen: boolean | undefined;
  isLoading: boolean;
  constructor(private slackerNewsApi: SlackerNewsApiService) {
    this.isLoading = true;
    this.stories = [];
    this.comments = [];
    this.dataAvailable = false;
    this.commentsAvailable = false;
    this.reload();
  }

  reload() {
    this.loadData();
    this.isSmallScreen = window.innerWidth < 768;
  }

  loadData() {
    forkJoin({
      stories: this.slackerNewsApi.getStories(),
      comments: this.slackerNewsApi.getComments(),
    }).subscribe({
      next: (value) => {
        this.comments = value.comments;
        this.stories = value.stories;
        this.dataAvailable = true;
      },
    });
  }
}
