import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPortalComponent } from './projects-portal.component';

describe('ProjectsPortalComponent', () => {
  let component: ProjectsPortalComponent;
  let fixture: ComponentFixture<ProjectsPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
