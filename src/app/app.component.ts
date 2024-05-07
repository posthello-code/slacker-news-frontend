import { Component, HostListener, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SplitterModule } from "primeng/splitter";
import { TimelineModule } from "primeng/timeline";
import { TimelineViewerComponent } from "./timeline-viewer/timeline-viewer.component";
import { CommonModule, NgIf, isPlatformBrowser } from "@angular/common";
import { WindowSizeService } from "./window-size.service";
import { Subscription } from "rxjs";

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
  private sizeSubscription: Subscription;
  isSmallScreen = false;
  title = "slacker-news";
  constructor(private windowSizeService: WindowSizeService) {
    this.isSmallScreen = window.innerWidth < 768;
    this.sizeSubscription = this.windowSizeService.onResize$.subscribe(() => {
      console.log("Window resized");
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth < 768;
  }
}
