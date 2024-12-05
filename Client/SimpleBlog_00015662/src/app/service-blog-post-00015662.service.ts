import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost_00015662 } from './BlogPost_00015662';
import { Topic_00015662 } from './Topic_00015662';
@Injectable({
  providedIn: 'root'
})
export class ServiceBlogPost00015662Service {
  httpClient = inject(HttpClient);

  url = "http://localhost:5067/api/BlogPost_00015662/";
  constructor() { }
  getAllBlogPosts_00015662() {
    return this.httpClient.get<BlogPost_00015662[]>(this.url);
  };
  getById(id: number) {
    return this.httpClient.get<BlogPost_00015662>(this.url + id);
  }; 
  edit(BlogPost: BlogPost_00015662) {
    return this.httpClient.put(this.url, BlogPost);
  };
  delete(id: number) {
    return this.httpClient.delete(this.url + id);
  };
  create(BlogPost: BlogPost_00015662) {
    return this.httpClient.post<BlogPost_00015662>(this.url, BlogPost);
  };

  topicUrl = "http://localhost:5067/api/Topic_00015662/";
  getAllTopics_00015662() {
    return this.httpClient.get<Topic_00015662[]>(this.topicUrl);
  };
  getTopicById(id: number) {
    return this.httpClient.get<Topic_00015662>(this.topicUrl + id);
  }; 
  editTopic(Topic: Topic_00015662) {
    return this.httpClient.put(this.topicUrl, Topic);
  };
  deleteTopic(id: number) {
    return this.httpClient.delete(this.topicUrl + id);
  };
  createTopic(Topic: Topic_00015662) {
    return this.httpClient.post<Topic_00015662>(this.topicUrl, Topic);
  };
}
