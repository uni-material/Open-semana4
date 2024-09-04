import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {
  apiKey = 'c77d4e4095ec4bcaa5d129a24897f6be'
  baseURL = 'https://api.newsapi.org/v2';

  constructor(private http: HttpClient) {}

  getSources(){
    return this.http.get(`${this.baseURL}/top-headlines/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId:string){
    return this.http.get(`${this.baseURL}/top-headlines?sources=${sourceId}&apikey=${this.apiKey}`);
  }

  initArticle(){
    return this.getArticlesBySourceId('bbc-news');
  }


}
