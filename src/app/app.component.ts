import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { TimelineModule } from 'primeng/timeline';
import { TimelineViewerComponent } from './timeline-viewer/timeline-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplitterModule, TimelineModule, TimelineViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'slacker-news';
  ngOnInit() {
  
}
}
