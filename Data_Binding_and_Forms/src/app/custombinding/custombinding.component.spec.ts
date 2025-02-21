import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustombindingComponent } from './custombinding.component';

describe('CustombindingComponent', () => {
  let component: CustombindingComponent;
  let fixture: ComponentFixture<CustombindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustombindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustombindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
