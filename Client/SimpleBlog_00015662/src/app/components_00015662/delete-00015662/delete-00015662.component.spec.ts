import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delete00015662Component } from './delete-00015662.component';

describe('Delete00015662Component', () => {
  let component: Delete00015662Component;
  let fixture: ComponentFixture<Delete00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Delete00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delete00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
