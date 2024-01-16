import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilhoComponent } from './input-filho.component';

describe('InputFilhoComponent', () => {
  let component: InputFilhoComponent;
  let fixture: ComponentFixture<InputFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFilhoComponent]
    });
    fixture = TestBed.createComponent(InputFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
