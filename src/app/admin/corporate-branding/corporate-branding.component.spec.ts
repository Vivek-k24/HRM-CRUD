import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateBrandingComponent } from './corporate-branding.component';

describe('CorporateBrandingComponent', () => {
  let component: CorporateBrandingComponent;
  let fixture: ComponentFixture<CorporateBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateBrandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
