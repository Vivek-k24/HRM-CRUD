import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePackagesComponent } from './language-packages.component';

describe('LanguagePackagesComponent', () => {
  let component: LanguagePackagesComponent;
  let fixture: ComponentFixture<LanguagePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagePackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
