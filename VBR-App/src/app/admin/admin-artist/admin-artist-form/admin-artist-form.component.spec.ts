import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtistFormComponent } from './admin-artist-form.component';

describe('AdminArtistFormComponent', () => {
  let component: AdminArtistFormComponent;
  let fixture: ComponentFixture<AdminArtistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtistFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
