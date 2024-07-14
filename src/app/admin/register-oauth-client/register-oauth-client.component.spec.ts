import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOauthClientComponent } from './register-oauth-client.component';

describe('RegisterOauthClientComponent', () => {
  let component: RegisterOauthClientComponent;
  let fixture: ComponentFixture<RegisterOauthClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterOauthClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOauthClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
