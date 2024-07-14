import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntitlementsComponent } from './add-entitlements.component';

describe('AddEntitlementsComponent', () => {
  let component: AddEntitlementsComponent;
  let fixture: ComponentFixture<AddEntitlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntitlementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntitlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
