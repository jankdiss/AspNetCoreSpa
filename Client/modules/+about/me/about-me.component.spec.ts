import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { Component } from '@angular/core';

// Load the implementations that should be tested
import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let fixture: ComponentFixture<AboutMeComponent>;
  let mockComponent: AboutMeComponent;
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeComponent]
    });
    // create component and test fixture
    fixture = TestBed.createComponent(AboutMeComponent);
    // get test component from the fixture
    mockComponent = fixture.componentInstance;
  });

  fit('should set buttonState to incactive to start with', () => {
    expect(mockComponent.buttonState).toBe('inactive');
  });

});
