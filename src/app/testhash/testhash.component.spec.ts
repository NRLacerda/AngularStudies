import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthashComponent } from './testhash.component';

describe('TesthashComponent', () => {
  let component: TesthashComponent;
  let fixture: ComponentFixture<TesthashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesthashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesthashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
