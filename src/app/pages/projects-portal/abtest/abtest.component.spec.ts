import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtestComponent } from './abtest.component';

describe('AbtestComponent', () => {
  let component: AbtestComponent;
  let fixture: ComponentFixture<AbtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
