import { TestBed } from '@angular/core/testing';

import { ServiceTopic00015662Service } from './service-topic-00015662.service';

describe('ServiceTopic00015662Service', () => {
  let service: ServiceTopic00015662Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTopic00015662Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
