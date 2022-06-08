import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorOfertaPageComponent } from './editor-oferta-page.component';

describe('EditorOfertaPageComponent', () => {
  let component: EditorOfertaPageComponent;
  let fixture: ComponentFixture<EditorOfertaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorOfertaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorOfertaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
