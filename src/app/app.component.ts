import { Component, HostListener } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SplitterModule } from "primeng/splitter";
import { TimelineModule } from "primeng/timeline";
import { TimelineViewerComponent } from "./timeline-viewer/timeline-viewer.component";
import { CommonModule, NgIf } from "@angular/common";

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
  isSmallScreen = false;
  title = "slacker-news";
  constructor() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    console.log("window resize");
    this.isSmallScreen = window.innerWidth < 768;
  }
}
