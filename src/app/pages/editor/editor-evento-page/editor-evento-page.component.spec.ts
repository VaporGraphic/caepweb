import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEventoPageComponent } from './editor-evento-page.component';

describe('EditorEventoPageComponent', () => {
  let component: EditorEventoPageComponent;
  let fixture: ComponentFixture<EditorEventoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorEventoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorEventoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
