import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserDataComponent } from './register-user-data.component';

describe('RegisterUserDataComponent', () => {
  let component: RegisterUserDataComponent;
  let fixture: ComponentFixture<RegisterUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
