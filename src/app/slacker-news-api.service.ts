import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class SlackerNewsApiService {

  constructor() { }
  getStories() {
    return axios.get('https://slacker-news-server.onrender.com/stories');
  }
}
