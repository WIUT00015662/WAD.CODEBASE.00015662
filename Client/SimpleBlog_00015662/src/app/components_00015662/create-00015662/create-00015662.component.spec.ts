import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Create00015662Component } from './create-00015662.component';

describe('Create00015662Component', () => {
  let component: Create00015662Component;
  let fixture: ComponentFixture<Create00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Create00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Create00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
