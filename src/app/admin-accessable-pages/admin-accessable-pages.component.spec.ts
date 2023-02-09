import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccessablePagesComponent } from './admin-accessable-pages.component';

describe('AdminAccessablePagesComponent', () => {
  let component: AdminAccessablePagesComponent;
  let fixture: ComponentFixture<AdminAccessablePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccessablePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccessablePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
