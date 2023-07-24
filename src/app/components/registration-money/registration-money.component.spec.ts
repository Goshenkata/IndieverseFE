import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMoneyComponent } from './registration-money.component';

describe('RegistrationMoneyComponent', () => {
  let component: RegistrationMoneyComponent;
  let fixture: ComponentFixture<RegistrationMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
