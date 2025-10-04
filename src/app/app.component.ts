import { Component, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SplitterModule } from "primeng/splitter";
import { TimelineModule } from "primeng/timeline";
import { TimelineViewerComponent } from "./timeline-viewer/timeline-viewer.component";
import { CommonModule, NgIf } from "@angular/common";
import { debounce, fromEvent, interval } from "rxjs";
import { ThemeService } from "./theme.service";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";

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
    ButtonModule,
    TooltipModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  @ViewChild(TimelineViewerComponent) timelineViewer!: TimelineViewerComponent;
  isSmallScreen = window.innerWidth < 768;
  title = "slacker-news";

  constructor(public themeService: ThemeService) {
    const resize = fromEvent(window, "resize");
    const result = resize.pipe(debounce(() => interval(500)));
    result.subscribe(() => {
      this.isSmallScreen = window.innerWidth < 768;
    });
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  get isDataLoading(): boolean {
    return this.timelineViewer ? !this.timelineViewer.dataAvailable : true;
  }
}
