import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Story } from "./models/stories";
import { Comment } from "./models/comments";

const url = "https://slacker-news-server.onrender.com";

@Injectable({
  providedIn: "root",
})
export class SlackerNewsApiService {
  constructor(private http: HttpClient) {}
  getStories() {
    return this.http.get<Story[]>(url + "/stories");
  }
  getComments() {
    return this.http.get<Comment[]>(url + "/comments");
  }
}
