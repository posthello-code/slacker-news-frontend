import { Component } from "@angular/core";
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { SlackerNewsApiService } from "../slacker-news-api.service";
import { ListboxModule } from "primeng/listbox";
import { CommonModule, NgFor, NgIf } from "@angular/common";

interface Story {
  id?: string;
  title?: string;
  summary?: string;
  sourceUri?: string;
  sourceId?: string;
  createdDate?: string;
  externalId?: number;
}

interface Comment {
  summary?: string;
  id?: string;
  sourceId?: string;
  createdDate?: string;
  externalId?: number;
}

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
  constructor(private slackerNewsApi: SlackerNewsApiService) {
    this.stories = [];
    this.comments = [];
    this.dataAvailable = false;
    this.commentsAvailable = false;
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.loadData();
    this.isSmallScreen = window.innerWidth < 768;
  }

  loadData() {
    this.slackerNewsApi
      .getStories()
      .then((data) => {
        this.dataAvailable = true;

        // Use the data here
        this.stories = data.data;
      })
      .catch((e) => {
        this.dataAvailable = false;
        console.log("catch");
        console.log(e);
      });
    this.slackerNewsApi
      .getComments()
      .then((data) => {
        this.commentsAvailable = true;

        // Use the data here
        this.comments = data.data;
      })
      .catch((e) => {
        this.commentsAvailable = false;
        console.log("catch");
        console.log(e);
      });
  }
}
