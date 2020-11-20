import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonajeComponent } from './update-personaje.component';

describe('UpdatePersonajeComponent', () => {
  let component: UpdatePersonajeComponent;
  let fixture: ComponentFixture<UpdatePersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
