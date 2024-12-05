import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTopic00015662Component } from './create-topic-00015662.component';

describe('CreateTopic00015662Component', () => {
  let component: CreateTopic00015662Component;
  let fixture: ComponentFixture<CreateTopic00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTopic00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTopic00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
