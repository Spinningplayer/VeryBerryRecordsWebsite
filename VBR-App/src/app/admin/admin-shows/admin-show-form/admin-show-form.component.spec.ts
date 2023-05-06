import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowFormComponent } from './admin-show-form.component';

describe('AdminShowFormComponent', () => {
  let component: AdminShowFormComponent;
  let fixture: ComponentFixture<AdminShowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminShowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
