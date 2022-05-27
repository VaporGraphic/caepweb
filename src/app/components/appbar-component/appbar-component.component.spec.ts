import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarComponentComponent } from './appbar-component.component';

describe('AppbarComponentComponent', () => {
  let component: AppbarComponentComponent;
  let fixture: ComponentFixture<AppbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
