import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SplitterModule } from "primeng/splitter";
import { TimelineModule } from "primeng/timeline";
import { TimelineViewerComponent } from "./timeline-viewer/timeline-viewer.component";
import { CommonModule, NgIf } from "@angular/common";
import { debounce, fromEvent, interval } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    SplitterModule,
    TimelineModule,
    TimelineViewerComponent,
    NgIf,
    CommonModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  isSmallScreen = window.innerWidth < 768;
  title = "slacker-news";
  constructor() {
    const resize = fromEvent(window, "resize");
    const result = resize.pipe(debounce(() => interval(500)));
    result.subscribe(() => {
      this.isSmallScreen = window.innerWidth < 768;
    });
  }
}
