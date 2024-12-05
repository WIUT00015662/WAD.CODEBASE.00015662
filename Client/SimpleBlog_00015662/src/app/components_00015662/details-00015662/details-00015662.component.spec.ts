import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Details00015662Component } from './details-00015662.component';

describe('Details00015662Component', () => {
  let component: Details00015662Component;
  let fixture: ComponentFixture<Details00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Details00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Details00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
