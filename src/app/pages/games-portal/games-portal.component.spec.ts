import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPortalComponent } from './games-portal.component';

describe('GamesPortalComponent', () => {
  let component: GamesPortalComponent;
  let fixture: ComponentFixture<GamesPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
