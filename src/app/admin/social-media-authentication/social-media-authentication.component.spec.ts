import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAuthenticationComponent } from './social-media-authentication.component';

describe('SocialMediaAuthenticationComponent', () => {
  let component: SocialMediaAuthenticationComponent;
  let fixture: ComponentFixture<SocialMediaAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
