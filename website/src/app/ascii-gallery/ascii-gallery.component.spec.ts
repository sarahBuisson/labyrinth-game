import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiGalleryComponent } from './ascii-gallery.component';

describe('AsciiGalleryComponent', () => {
  let component: AsciiGalleryComponent;
  let fixture: ComponentFixture<AsciiGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsciiGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
