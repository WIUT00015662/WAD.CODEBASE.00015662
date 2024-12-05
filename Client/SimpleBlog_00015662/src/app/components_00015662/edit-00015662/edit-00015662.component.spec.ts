import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit00015662Component } from './edit-00015662.component';

describe('Edit00015662Component', () => {
  let component: Edit00015662Component;
  let fixture: ComponentFixture<Edit00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edit00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Edit00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
