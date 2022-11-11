import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthbutComponent } from './authbut.component';

describe('AuthbutComponent', () => {
  let component: AuthbutComponent;
  let fixture: ComponentFixture<AuthbutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthbutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthbutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
