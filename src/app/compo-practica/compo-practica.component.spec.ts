import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoPracticaComponent } from './compo-practica.component';

describe('CompoPracticaComponent', () => {
  let component: CompoPracticaComponent;
  let fixture: ComponentFixture<CompoPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompoPracticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompoPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
