import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost_00015662 } from './BlogPost_00015662';
import { Topic_00015662 } from './Topic_00015662';
@Injectable({
  providedIn: 'root'
})
export class ServiceTopic00015662Service {
  httpClient = inject(HttpClient);

  url = "http://localhost:5067/api/Topic_00015662/";
  constructor() { }
  getTopicById(id: number) {
    return this.httpClient.get<Topic_00015662>(this.url + id);
  }; 
  editTopic(Topic: Topic_00015662) {
    return this.httpClient.put(this.url, Topic);
  };
  deleteTopic(id: number) {
    return this.httpClient.delete(this.url + id);
  };
  createTopic(Topic: Topic_00015662) {
    return this.httpClient.post<Topic_00015662>(this.url, Topic);
  };
}
