import { TestBed } from "@angular/core/testing";

import { SlackerNewsApiService } from "./slacker-news-api.service";

describe("SlackerNewsApiService", () => {
  let service: SlackerNewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlackerNewsApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
