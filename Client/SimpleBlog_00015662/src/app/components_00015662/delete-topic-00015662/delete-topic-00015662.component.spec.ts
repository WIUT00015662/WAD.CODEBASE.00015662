import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTopic00015662Component } from './delete-topic-00015662.component';

describe('DeleteTopic00015662Component', () => {
  let component: DeleteTopic00015662Component;
  let fixture: ComponentFixture<DeleteTopic00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTopic00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTopic00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
