import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistShowTablerowComponent } from './artist-show-tablerow.component';

describe('ArtistShowTablerowComponent', () => {
  let component: ArtistShowTablerowComponent;
  let fixture: ComponentFixture<ArtistShowTablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistShowTablerowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistShowTablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
