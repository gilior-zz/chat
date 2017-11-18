import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login.DialogComponent } from './login.dialog.component';

describe('Login.DialogComponent', () => {
  let component: Login.DialogComponent;
  let fixture: ComponentFixture<Login.DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login.DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
