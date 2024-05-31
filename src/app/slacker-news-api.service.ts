import { Injectable } from '@angular/core';
import axios from 'axios';

const url = 'https://slacker-news-server.onrender.com';

@Injectable({
  providedIn: 'root',
})
export class SlackerNewsApiService {
  constructor() {}
  getStories() {
    return axios.get(url + '/stories');
  }
  getComments() {
    return axios.get(url + '/comments');
  }
}
