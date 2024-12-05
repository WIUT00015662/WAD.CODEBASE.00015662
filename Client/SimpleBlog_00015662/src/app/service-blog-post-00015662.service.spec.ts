import { TestBed } from '@angular/core/testing';

import { ServiceBlogPost00015662Service } from './service-blog-post-00015662.service';

describe('ServiceBlogPost00015662Service', () => {
  let service: ServiceBlogPost00015662Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBlogPost00015662Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
