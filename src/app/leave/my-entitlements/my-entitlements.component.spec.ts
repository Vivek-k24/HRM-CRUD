import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEntitlementsComponent } from './my-entitlements.component';

describe('MyEntitlementsComponent', () => {
  let component: MyEntitlementsComponent;
  let fixture: ComponentFixture<MyEntitlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEntitlementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyEntitlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
