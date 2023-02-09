import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessablePagesComponent } from './user-accessable-pages.component';

describe('UserAccessablePagesComponent', () => {
  let component: UserAccessablePagesComponent;
  let fixture: ComponentFixture<UserAccessablePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccessablePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccessablePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
