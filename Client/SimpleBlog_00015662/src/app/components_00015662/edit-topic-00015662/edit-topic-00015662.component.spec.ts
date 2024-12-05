import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTopic00015662Component } from './edit-topic-00015662.component';

describe('EditTopic00015662Component', () => {
  let component: EditTopic00015662Component;
  let fixture: ComponentFixture<EditTopic00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTopic00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTopic00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
