import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGradesComponent } from './pay-grades.component';

describe('PayGradesComponent', () => {
  let component: PayGradesComponent;
  let fixture: ComponentFixture<PayGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayGradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
