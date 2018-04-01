/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StickyWallComponent } from './sticky-wall.component';

describe('StickyWallComponent', () => {
  let component: StickyWallComponent;
  let fixture: ComponentFixture<StickyWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
