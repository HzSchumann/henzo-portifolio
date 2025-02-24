import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratefulComponent } from './grateful.component';

describe('GratefulComponent', () => {
  let component: GratefulComponent;
  let fixture: ComponentFixture<GratefulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratefulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GratefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
