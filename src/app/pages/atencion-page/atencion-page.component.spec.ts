import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionPageComponent } from './atencion-page.component';

describe('AtencionPageComponent', () => {
  let component: AtencionPageComponent;
  let fixture: ComponentFixture<AtencionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
