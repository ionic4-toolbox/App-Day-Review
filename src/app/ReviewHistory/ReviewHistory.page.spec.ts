import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHistoryPage } from './ReviewHistory.page';

describe('ReviewHistoryPage', () => {
  let component: ReviewHistoryPage;
  let fixture: ComponentFixture<ReviewHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewHistoryPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
