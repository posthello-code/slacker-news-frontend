import { TestBed } from "@angular/core/testing";

import { SlackerNewsApiService } from "./slacker-news-api.service";
import { provideHttpClient } from "@angular/common/http";

describe("SlackerNewsApiService", () => {
  let service: SlackerNewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(SlackerNewsApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
